using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WriterApp.Repository;
using WriterApp.ViewModel;
using WriterApp.Model;

namespace WriterApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly IWriterRepository _writerRepository;
        public HomeController(
           IWriterRepository writerRepository
        )
        {
            _writerRepository = writerRepository;
        }
        public async Task<IActionResult> Index(string sortOrder, string direction , string searchString, string currentFilter, int? page)
        {
            WriterListViewModel writerList = new WriterListViewModel();
            writerList.Filter = searchString;
            writerList.Order.Column = sortOrder;
            writerList.Order.Direction = direction ?? "ASC";
            writerList.Page = page ?? 1;
            if (writerList.Filter != null)            
                writerList.Page = 1;            
            else           
                writerList.Filter = currentFilter;             
            var writers = _writerRepository.GetWritersWithParameters(writerList.PageSize, writerList.Filter, writerList.Order.Direction, writerList.Order.Column, writerList.Page); 
            foreach (var c in writers)
            {
                writerList.Items.Add(new WriterGridModel { Id = c.Id, FullName = $"{c.LastName} {c.FirstName}", DateOfBirth = c.DateOfBirth, Biography = c.Biography });
            }
            writerList.TotalPages = (int)Math.Ceiling(writers.TotalCount / (double)writerList.PageSize);
            return View(writerList);    
        }  

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("FirstName,LastName,DateOfBirth,Biography")] WriterCreateModel writer)
        {
            if (ModelState.IsValid)
            {
                _writerRepository.Add(new Writer {
                    FirstName = writer.FirstName,
                    LastName = writer.LastName,
                    DateOfBirth = writer.DateOfBirth,
                    Biography = writer.Biography
                });
                return RedirectToAction("Index");
            } 
            return View(writer);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            var writer = _writerRepository.GetById(id);
            return View(new WriterEditModel {
                FirstName = writer.FirstName,
                LastName = writer.LastName,
                DateOfBirth = writer.DateOfBirth,
                Biography = writer.Biography
            });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(WriterEditModel writer)
        {  
            if (ModelState.IsValid)
            {
                _writerRepository.Edit(new Writer {
                    Id = writer.Id,
                    FirstName = writer.FirstName,
                    LastName = writer.LastName,
                    DateOfBirth = writer.DateOfBirth,
                    Biography = writer.Biography
                });
                return RedirectToAction("Index");
            }
            return View(writer);
        }

        public async Task<IActionResult> Delete(int id)
        {
            _writerRepository.Delete(id);
            return RedirectToAction("Index");
        }
    }
}
