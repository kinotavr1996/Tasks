using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using WriterApp.Data.Model;
using WriterApp.Repository;
using WriterApp.Web.ViewModel;

namespace BookApp.Web.Controllers
{
    public class BookController : Controller
    {
        private readonly IBookRepository _bookRepository;
        public BookController(
           IBookRepository bookRepository
        )
        {
            _bookRepository = bookRepository;
        }
        public IQueryable<Book> ApplyFilter(IQueryable<Book> query, string searchString)
        {
            if (!String.IsNullOrEmpty(searchString))
                return query.Where(s => s.Caption.ToUpper().Contains(searchString.ToUpper()) || s.Caption.ToUpper().Contains(searchString.ToUpper()));
            else
                return query;
        }
        public IQueryable<Book> ApplySortOrder(IQueryable<Book> query, string sortOrder, string direction)
        {
            switch (sortOrder)
            {
                case "caption":
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
        public async Task<IActionResult> Index(string sortOrder, string direction, string searchString, string currentFilter, int? page)
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
            foreach (var c in books)
            {
                bookList.Items.Add(new BookGridModel { Id = c.Id, Caption = c.Caption, PublishedDate = c.PublishedDate });
            }
            bookList.TotalPages = (int)Math.Ceiling(books.TotalCount / (double)bookList.PageSize);
            return View(bookList);
        }
        [HttpGet]
        public async Task<IActionResult> Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Caption,PublishedDate")] BookCreateModel book)
        {
            if (ModelState.IsValid)
            {
                _bookRepository.Add(new Book
                {
                    Caption = book.Caption,
                    PublishedDate = book.PublishedDate
                });
                return RedirectToAction("Index");
            }
            return View(book);
        } 
        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            var book = _bookRepository.GetById(id);
            return View(new BookEditModel
            {
                Caption = book.Caption,
                PublishedDate = book.PublishedDate
            });
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(BookEditModel book)
        {
            if (ModelState.IsValid)
            {
                _bookRepository.Edit(new Book
                {
                    Id = book.Id,
                    Caption = book.Caption,
                    PublishedDate = book.PublishedDate
                });
                return RedirectToAction("Index");
            }
            return View(book);
        }

        public async Task<IActionResult> Delete(int id)
        {
            _bookRepository.Delete(id);
            return RedirectToAction("Index");
        }
    }
}
