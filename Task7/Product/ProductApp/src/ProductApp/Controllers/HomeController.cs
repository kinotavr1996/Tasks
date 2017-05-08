using Microsoft.AspNetCore.Mvc;
using Crudtest.Repository;
using System.Threading.Tasks;
using System;
using System.Linq;
using System.Collections.Generic;
using Crudtest.Models;
using Crudtest.DTO;

namespace Crudtest.Controllers
{
    public class HomeController : Controller
    {

        private readonly IProductRepository _productRepository;

        public HomeController(
           IProductRepository productRepository
       )
        {
            _productRepository = productRepository;
        }
        public async Task<IActionResult> Index(string sortOrder, string orderBy, string searchString, string currentFilter, int? page)
        {
            orderBy = String.IsNullOrEmpty(orderBy) ? "ASC" : orderBy;
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

            var products = _productRepository.GetProducts();
            List<Product> prodVM = new List<Product>();
            if (!String.IsNullOrEmpty(searchString))
            {
                products = products.Where(s => s.ProductName.ToUpper().Contains(searchString.ToUpper())).ToList();
            }
            switch (sortOrder)
            {
                case "productname":
                    products = orderBy == "ASC" ? products.OrderBy(s => s.ProductName).ToList() : products.OrderByDescending(s => s.ProductName).ToList();
                    break;
                case "price":
                    products = orderBy == "ASC" ? products.OrderBy(s => s.Price).ToList() : products.OrderByDescending(s => s.Price).ToList();
                    break;

            }
            ViewData["OrderBy"] = orderBy == "ASC" ? "DESC" : "ASC";
            int pageSize = 4;
            return View(await PaginatedList<Product>.CreateAsync(products, page ?? 1, pageSize));
        }
        [HttpGet]
        public async Task<IActionResult> Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Price,ProductName")] ProductDTO product)
        {
            if (ModelState.IsValid)
            {
                _productRepository.AddProduct(new Product { Price = product.Price, ProductName = product.ProductName });
                return RedirectToAction("Index");
            }

            return View(product);
        }
        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            var product = _productRepository.GetProductById(id);

            return View(new ProductDTO { Price = product.Price, ProductName = product.ProductName });
        }
        [HttpPost]
        public async Task<IActionResult> Edit(int id, [Bind("Price,ProductName")] ProductDTO product)
        {
            if (ModelState.IsValid)
            {
                _productRepository.EditProduct(new Product { Id = id, Price = product.Price, ProductName = product.ProductName });
                return RedirectToAction("Index");
            }
            return View(product);
        }
        public async Task<IActionResult> Delete(int id)
        {
            _productRepository.DeleteProduct(id);
            return RedirectToAction("Index");


        }
    }
}