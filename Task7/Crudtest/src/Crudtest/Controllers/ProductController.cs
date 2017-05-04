using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Crudtest.Repository;
using Crudtest.DTO;
using Crudtest.Models;
using Crudtest.ViewModel;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Crudtest.Controllers
{
    public class ProductController : Controller
    {
        private readonly IProductRepository _productRepository;

        public ProductController(
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
            List<ProductListVM> prodVM = new List<ProductListVM>();              
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
            foreach (var product in products)
            {
                prodVM.Add(new ProductListVM { Id = product.Id, Price = product.Price, ProductName = product.ProductName });
            }
            return View(await PaginatedList<ProductListVM>.CreateAsync(prodVM, page ?? 1, pageSize));
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
