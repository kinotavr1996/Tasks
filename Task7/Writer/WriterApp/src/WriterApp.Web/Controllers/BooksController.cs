using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using WriterApp.Data.Model;
using WriterApp.Repository;
using WriterApp.Web.ViewModel;

namespace WriterApp.Web.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        private readonly IBookRepository _bookRepository;
        private readonly IWriterRepository _writerRepository;
        public BooksController(
           IBookRepository bookRepository,
           IWriterRepository writerRepository
        )
        {
            _bookRepository = bookRepository;
            _writerRepository = writerRepository;
        }
        public IQueryable<Book> ApplyFilter(IQueryable<Book> query, string searchString)
        {
            if (!String.IsNullOrEmpty(searchString))
                return query.Where(s => s.Caption.ToUpper().Contains(searchString.ToUpper()));
            else
                return query;
        }
        public IQueryable<Book> ApplySortOrder(IQueryable<Book> query, string sortOrder, string direction)
        {
            switch (sortOrder)
            {
                case "fullname":
                    query = direction == "ASC" ? query.OrderBy(s => s.Caption) : query.OrderByDescending(s => s.Caption);
                    break;
                case "date":
                    query = direction == "ASC" ? query.OrderBy(s => s.PublishedDate) : query.OrderByDescending(s => s.PublishedDate);
                    break;
                default:
                    query = direction == "ASC" ? query.OrderBy(s => s.Caption) : query.OrderByDescending(s => s.Caption);
                    break;
            }
            return query;
        }
        [HttpGet]
        [Route("Get")]
        [ProducesResponseType(typeof(BookListViewModel), 200)]
        [ProducesResponseType(typeof(BookListViewModel), 404)]
        public ActionResult Get([FromQuery]string sortOrder, [FromQuery]string direction, [FromQuery]string searchString, [FromQuery]string currentFilter, [FromQuery]int? page)
        {
            BookListViewModel bookList = new BookListViewModel();
            bookList.Filter = searchString;
            bookList.Order.Column = sortOrder;
            bookList.Order.Direction = direction ?? "ASC";
            bookList.Page = page ?? 1;
            if (bookList.Filter != null)
                bookList.Page = 1;
            else
                bookList.Filter = currentFilter;
            var books = _bookRepository.GetPage(bookList.Page, bookList.PageSize, (query) => ApplySortOrder(ApplyFilter(query, searchString), bookList.Order.Column, bookList.Order.Direction));
            bookList.Items = books.Select(x => new BookGridModel
            {
                Id = x.Id,
                Caption = x.Caption,
                PublishedDate = x.PublishedDate,
                Writers = x.WriterBooks.Select(w => new WriterGridModel { FullName = $"{w.Writer.LastName} {w.Writer.FirstName}", Id = w.Writer.Id }).ToList()
            }).ToList();
            bookList.TotalPages = (int)Math.Ceiling(books.TotalCount / (double)bookList.PageSize);
            return Ok(bookList);
        }
        [HttpGet]
        [Route("Create")]
        [ProducesResponseType(typeof(BookCreateModel), 201)]
        [ProducesResponseType(typeof(BookCreateModel), 400)]
        public ActionResult Create()
        {
            BookCreateModel book = new BookCreateModel();
            foreach (var w in _writerRepository.Get())
            {
                book.Writers.Add(new SelectListItem { Value = w.Id.ToString(), Text = $"{w.LastName} {w.FirstName}" });
            }
            return Ok(book);
        }
        [HttpPost]
        [ProducesResponseType(typeof(BookCreateModel), 201)]
        [ProducesResponseType(typeof(BookCreateModel), 400)]
        public ActionResult Create([FromBody]BookCreateModel model)
        {
            Book book = new Book
            {
                Caption = model.Caption,
                PublishedDate = model.PublishedDate,
                WriterBooks = new List<WriterBook>()
            };
            foreach (var id in model.WriterIds)
            {
                book.WriterBooks.Add(new WriterBook { WriterId = id });
            }
            _bookRepository.Add(book);
            return Ok();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(BookEditModel), 200)]
        [ProducesResponseType(typeof(BookEditModel), 404)]
        public ActionResult Edit(int id)
        {
            Book book = _bookRepository.GetById(id);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(new BookEditModel
            {
                Caption = book.Caption,
                PublishedDate = book.PublishedDate,
                WriterIds = book.WriterBooks.Select(x => x.WriterId).ToList(),
                Writers = _writerRepository.Get().Select(x => new SelectListItem { Value = x.Id.ToString(), Text = $"{x.LastName} {x.FirstName}" }).ToList()
            });

        }
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(BookEditModel), 200)]
        [ProducesResponseType(typeof(BookEditModel), 404)]
        [ProducesResponseType(typeof(BookEditModel), 400)]
        public ActionResult Edit([FromRoute]int id, [FromBody]BookEditModel model)
        {
            if (model == null)
            {
                return NotFound();
            }
            Book book = new Book
            {
                Id = id,
                Caption = model.Caption,
                PublishedDate = model.PublishedDate,
                WriterBooks = new List<WriterBook>()
            };
            foreach (var wid in model.WriterIds)
            {
                book.WriterBooks.Add(new WriterBook { WriterId = wid, BookId = id });
            }
            _bookRepository.Edit(book);
            return Ok();
        }
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _bookRepository.Delete(id);
            return Ok();
        }
    }
}
