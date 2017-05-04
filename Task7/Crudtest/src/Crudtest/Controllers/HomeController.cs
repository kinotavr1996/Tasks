using Microsoft.AspNetCore.Mvc;
using Crudtest.Repository;
using System.Threading.Tasks;
using System;
using System.Linq;
using Crudtest.ViewModel;

namespace Crudtest.Controllers
{
    public class HomeController : Controller
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IProductRepository _productRepository; 
        private readonly ICustomerRepository  _customerRepository;

        public HomeController(
            IOrderRepository orderRepository,
            ICustomerRepository customerRepository,
            IProductRepository productRepository
        )
        {
            _orderRepository = orderRepository;
            _productRepository = productRepository;
            _customerRepository = customerRepository;
        }
        public async Task<IActionResult> Index(string sortOrder,string orderBy, string searchString, string currentFilter, int? page)
        {
            orderBy =  String.IsNullOrEmpty(orderBy) ? "ASC" : orderBy;
            ViewData["CurrentFilter"] = searchString;
            ViewData["CurrentSort"] = sortOrder;
            ViewData["CurrentOrderBy"] = orderBy;
            if (searchString != null)
            {
                page = 1;
            }
            else
            {
                searchString = currentFilter;
            }
            var customers = _productRepository.GetAllInfo();
            if (!String.IsNullOrEmpty(searchString))
            {
                customers = customers.Where(s => s.ProductName.ToUpper().Contains(searchString.ToUpper())).ToList();                                        
            }
            switch (sortOrder)
            {
                case "firstname":
                    customers = orderBy == "ASC" ? customers.OrderBy(s => s.FirstName).ToList() : customers.OrderByDescending(s => s.FirstName).ToList();
                    break;
                case "lastname":
                    customers = orderBy == "ASC" ? customers.OrderBy(s => s.LastName).ToList() : customers.OrderByDescending(s => s.LastName).ToList();
                    break;
                case "orderdate":
                    customers = orderBy == "ASC" ? customers.OrderBy(s => s.OrderDate).ToList() : customers.OrderByDescending(s => s.OrderDate).ToList();
                    break;
                case "email":
                    customers = orderBy == "ASC" ? customers.OrderBy(s => s.Email).ToList() : customers.OrderByDescending(s => s.Email).ToList();
                    break;
                case "productname":
                    customers = orderBy == "ASC" ? customers.OrderBy(s=>s.ProductName).ToList() : customers.OrderByDescending(s => s.ProductName).ToList();
                    break;
                case "price":
                    customers = orderBy == "ASC" ? customers.OrderBy(s => s.Price).ToList() : customers.OrderByDescending(s => s.Price).ToList();
                    break;
                default:
                    customers = orderBy == "ASC" ? customers.OrderBy(s => s.Price).ToList() : customers.OrderByDescending(s => s.Price).ToList();
                    break;
            }                
            ViewData["OrderBy"] = orderBy == "ASC" ? "DESC" : "ASC";
            int pageSize = 4;
            return View(await PaginatedList<CustomerVM>.CreateAsync(customers, page ?? 1, pageSize));
        }
     
        public IActionResult Error()
        {
            return View();
        }
    }
}
