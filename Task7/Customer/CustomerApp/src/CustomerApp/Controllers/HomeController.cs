using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CustomerApp.Repository;
using CustomerApp.Model;
using CustomerApp.ViewModel;

namespace Crudtest.Controllers
{
    public class HomeController : Controller
    {
        private readonly ICustomerRepository _customerRepository;

        public HomeController(
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
            if (!String.IsNullOrEmpty(searchString))
            {
                customers = customers.Where(s => s.FirstName.ToUpper().Contains(searchString.ToUpper())).ToList();
            }
            switch (sortOrder)
            {
                case "firstName":
                    customers = orderBy == "ASC" ? customers.OrderBy(s => s.FirstName).ToList() : customers.OrderByDescending(s => s.FirstName).ToList();
                    break;
                case "lastName":
                    customers = orderBy == "ASC" ? customers.OrderBy(s => s.LastName).ToList() : customers.OrderByDescending(s => s.LastName).ToList();
                    break;
                case "email":
                    customers = orderBy == "ASC" ? customers.OrderBy(s => s.Email).ToList() : customers.OrderByDescending(s => s.Email).ToList();
                    break;
                case "phoneNumber":
                    customers = orderBy == "ASC" ? customers.OrderBy(s => s.PhoneNumber).ToList() : customers.OrderByDescending(s => s.PhoneNumber).ToList();
                    break;

            }
            ViewData["OrderBy"] = orderBy == "ASC" ? "DESC" : "ASC";
            
            return View(await PaginatedList<Customer>.CreateAsync(customers, page ?? 1, pageSize));
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("FirstName,LastName,Email,PhoneNumber")] Customer customer)
        {
            if (ModelState.IsValid)
            {
                _customerRepository.AddCustomer(new Customer { FirstName = customer.FirstName, LastName = customer.LastName, Email = customer.Email, PhoneNumber = customer.PhoneNumber });
                return RedirectToAction("Index");
            }

            return View(customer);
        }
        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            var customer = _customerRepository.GetCustomerById(id);

            return View(customer);
        }
        [HttpPost]
        public async Task<IActionResult> Edit(Customer customer)
        {

            if (ModelState.IsValid)
            {
                _customerRepository.EditCustomer(customer);
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
