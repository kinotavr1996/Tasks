using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Crudtest.Repository;
using Crudtest.DTO;
using Crudtest.Models;
using Crudtest.ViewModel;

namespace Crudtest.Controllers
{
    public class CustomerController : Controller
    {
        private readonly ICustomerRepository _customerRepository;

        public CustomerController(
           ICustomerRepository customerRepository
       )
        {
            _customerRepository = customerRepository;
        }
        public async Task<IActionResult> Index(string sortOrder, string orderBy, string searchString, string currentFilter, int? page)
        {
            orderBy = String.IsNullOrEmpty(orderBy) ? "ASC" : orderBy;
            ViewData["CurrentFilter"] = searchString;
            ViewData["CurrentSort"] = sortOrder;
            ViewData["CurrentOrderBy"] = orderBy;
            int pageSize = 4;
            if (searchString != null)
            {
                page = 1;
            }
            else
            {
                searchString = currentFilter;
            }
            var customers = _customerRepository.GetCustomers();
            List<CustomerListVM> custVM = new List<CustomerListVM>();
            if (!String.IsNullOrEmpty(searchString))
            {
                customers = customers.Where(s => s.FirstName.ToUpper().Contains(searchString.ToUpper())).ToList();
            }
            switch (sortOrder)
            {
                case "firstname":
                    customers = orderBy == "ASC" ? customers.OrderBy(s => s.FirstName).ToList() : customers.OrderByDescending(s => s.FirstName).ToList();
                    break;
                case "lastname":
                    customers = orderBy == "ASC" ? customers.OrderBy(s => s.LastName).ToList() : customers.OrderByDescending(s => s.LastName).ToList();
                    break;
                case "email":
                    customers = orderBy == "ASC" ? customers.OrderBy(s => s.Email).ToList() : customers.OrderByDescending(s => s.Email).ToList();
                    break;

            }
            ViewData["OrderBy"] = orderBy == "ASC" ? "DESC" : "ASC";          
            foreach (var customer in customers)
            {
                custVM.Add(new CustomerListVM { Id = customer.Id, FirstName = customer.FirstName, LastName = customer.LastName, Email = customer.Email });
            }
            return View(await PaginatedList<CustomerListVM>.CreateAsync(custVM, page ?? 1, pageSize));
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("FirstName,LastName,Email")] CustomerDTO customer)
        {
            if (ModelState.IsValid)
            {
                _customerRepository.AddCustomer(new Customer { FirstName = customer.FirstName, LastName = customer.LastName, Email = customer.Email });
                return RedirectToAction("Index");
            }

            return View(customer);
        }
        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            var customer = _customerRepository.GetCustomerById(id);

            return View(new CustomerDTO { FirstName = customer.FirstName, LastName = customer.LastName, Email = customer.Email });
        }
        [HttpPost]
        public async Task<IActionResult> Edit(int id, [Bind("FirstName,LastName,Email")] CustomerDTO customer)
        {
            
            if (ModelState.IsValid)
            {
                _customerRepository.EditCustomer(new Customer { Id = id, FirstName = customer.FirstName, LastName = customer.LastName, Email = customer.Email });
                return RedirectToAction("Index");
            }
            return View(customer);
        }
        public async Task<IActionResult> Delete(int id)
        {               
            _customerRepository.Delete(id);
            return RedirectToAction("Index");
        }
    }
}
