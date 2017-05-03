using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Crudtest.Repository;

namespace Crudtest.Controllers
{
    public class HomeController : Controller
    {
        private readonly IOrderRepository _orderRepository;
        public HomeController(
            IOrderRepository orderRepository
        )
        {
            _orderRepository = orderRepository;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";              
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
