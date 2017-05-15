using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        private readonly IWriterRepository _writerRepository;
        public ReportController(
           IWriterRepository writerRepository
        )
        {
            _writerRepository = writerRepository;
        }
        public async Task<IActionResult> Index(string sortOrder, string direction, string searchString, string currentFilter, int? page)
        {
            ReportListViewModel reportList = new ReportListViewModel();
            reportList.Filter = searchString;
            reportList.Order.Column = sortOrder;
            reportList.Order.Direction = direction ?? "ASC";
            reportList.Page = page ?? 1;
            if (reportList.Filter != null)
                reportList.Page = 1;
            else
                reportList.Filter = currentFilter;
            var writers = _writerRepository.GetReportsPage(reportList.Order.Column, reportList.Order.Direction, reportList.Filter, reportList.Page, reportList.PageSize);
            reportList.Items = writers.Select(x => new ReportGridModel
            {
                FullName = x.FullName,
                NumberOfBooks = x.NumberOfBooks,
                FirstBook = x.FirstBook,
                LastBook = x.LastBook
            }).ToList();
            reportList.TotalPages = (int)Math.Ceiling(writers.TotalCount / (double)reportList.PageSize);
            return View(reportList);
        }

    }
}
