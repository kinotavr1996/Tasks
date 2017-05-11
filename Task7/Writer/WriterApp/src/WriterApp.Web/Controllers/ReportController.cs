using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using WriterApp.Data.Model;
using WriterApp.Repository;
using WriterApp.Web.ViewModel;


namespace WriterApp.Web.Controllers
{
    public class ReportController : Controller
    {
        private readonly IBookRepository _bookRepository;
        private readonly IWriterRepository _writerRepository;
        public ReportController(
           IBookRepository bookRepository,
           IWriterRepository writerRepository
        )
        {
            _bookRepository = bookRepository;
            _writerRepository = writerRepository;
        }
        public IQueryable<Writer> ApplyFilter(IQueryable<Writer> query, string searchString)
        {
            if (!String.IsNullOrEmpty(searchString))
                return query.Where(s => s.FirstName.ToUpper().Contains(searchString.ToUpper()) || s.LastName.ToUpper().Contains(searchString.ToUpper()));
            else
                return query;
        }
        public IQueryable<Writer> ApplySortOrder(IQueryable<Writer> query, string sortOrder, string direction)
        {
            switch (sortOrder)
            {
                case "fullname":
                    query = direction == "ASC" ? query.OrderBy(s => s.LastName).ThenBy(s => s.FirstName) : query.OrderByDescending(s => s.LastName).ThenByDescending(s => s.FirstName);
                    break;
                case "numberOfBooks":
                    query = direction == "ASC" ? query.OrderBy(s => s.WriterBooks.Select(x => x.Book).Count()) : query.OrderByDescending(s => s.WriterBooks.Select(x => x.Book).Count());
                    break;
                default:
                    query = direction == "ASC" ? query.OrderBy(s => s.LastName).ThenBy(s => s.FirstName) : query.OrderByDescending(s => s.LastName).ThenByDescending(s => s.FirstName);

                    break;
            }
            return query;
        }
        public async Task<IActionResult> Index(string sortOrder, string direction, string searchString, string currentFilter, int? page)
        {
            WriterReportList reportList = new WriterReportList();
            reportList.Filter = searchString;
            reportList.Order.Column = sortOrder;
            reportList.Order.Direction = direction ?? "ASC";
            reportList.Page = page ?? 1;
            if (reportList.Filter != null)
                reportList.Page = 1;
            else
                reportList.Filter = currentFilter;

            var writers = _writerRepository.GetPage(reportList.Page, reportList.PageSize, (query) => ApplySortOrder(ApplyFilter(query, searchString), reportList.Order.Column, reportList.Order.Direction));
            reportList.Items = writers.Select(x => new WriterGridModel
            {
                Id = x.Id,
                FullName = $"{x.LastName} {x.LastName}",
                Books = x.WriterBooks.Select(w => new BookGridModel { Id = w.Book.Id, Caption = w.Book.Caption, PublishedDate = w.Book.PublishedDate }).ToList()
            }).ToList(); 
          
            reportList.TotalPages = (int)Math.Ceiling(writers.TotalCount / (double)reportList.PageSize);
            return View(reportList);
        }

    }
}
