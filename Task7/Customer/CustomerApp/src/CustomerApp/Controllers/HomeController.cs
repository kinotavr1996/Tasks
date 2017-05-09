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
         
            CustomerListViewModel customerList = new CustomerListViewModel();
      
            customerList.Filter = searchString;
            customerList.Order.Column = sortOrder;
            customerList.Order.Destination = String.IsNullOrEmpty(orderBy) ? "ASC" : orderBy;
            customerList.TotalPages = (int)Math.Ceiling(_customerRepository.GetCustomers().Count() / (double)customerList.PageSize);
            customerList.Page = page ?? 1;
            if (customerList.Filter != null)
            {
                customerList.Page = 1;
            }
            else
            {
                customerList.Filter = currentFilter;
            }
            var customers = _customerRepository.GetCustomersWithParametrs(customerList.PageSize, customerList.Order.Destination, customerList.Order.Column, customerList.Page);

            foreach (var c in customers)
            {
                customerList.Items.Add(new CustomerGridModel { Id= c.Id, FullName = $"{c.FirstName} {c.LastName}", Email = c.Email, PhoneNumber = c.PhoneNumber });
            }          
            if (!String.IsNullOrEmpty(customerList.Filter))
            {
                customerList.Items = customerList.Items.Where(s => s.FullName.ToUpper().Contains(customerList.Filter.ToUpper())).ToList();
            }
          
            customerList.Order.Destination = customerList.Order.Destination == "ASC" ? "DESC" : "ASC";          

            return View(customerList);
         
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("FirstName,LastName,Email,PhoneNumber")] CustomerCreateModel customer)
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

            return View(new CustomerEditModel { FirstName = customer.FirstName, LastName = customer.LastName, Email = customer.Email, PhoneNumber = customer.PhoneNumber });
        }
        [HttpPost]
        public async Task<IActionResult> Edit([Bind("FirstName,LastName,Email,PhoneNumber")] CustomerEditModel customer)
        {

            if (ModelState.IsValid)
            {
                _customerRepository.EditCustomer(new Customer { FirstName = customer.FirstName, LastName = customer.LastName, Email = customer.Email, PhoneNumber = customer.PhoneNumber });
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
