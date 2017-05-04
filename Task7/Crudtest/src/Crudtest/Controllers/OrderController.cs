using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Crudtest.Repository;
using Crudtest.DTO;
using Crudtest.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Crudtest.Controllers
{
    public class OrderController : Controller
    {
        private readonly IOrderRepository _orderRepository;

        public OrderController(
           IOrderRepository orderRepository
       )
        {
            _orderRepository = orderRepository;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public async Task<IActionResult> Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("OrderDate")] OrderDTO order)
        {
            if (ModelState.IsValid)
            {
                _orderRepository.AddOrder(new Order { OrderDate = order.OrderDate});
                return RedirectToAction("Index");
            }

            return View(order);
        }
        public async Task<IActionResult> Edit(int id, [Bind("OrderDate")] OrderDTO order)
        {     
            if (ModelState.IsValid)
            {
                _orderRepository.EditOrder(new Order { OrderDate = order.OrderDate });
                return RedirectToAction("Index");
            }
            return View(order);
        }
        public async Task<IActionResult> Delete(int id)
        {               
            _orderRepository.DeleteOrder(id);
            return RedirectToAction("Index");


        }
    }
}
