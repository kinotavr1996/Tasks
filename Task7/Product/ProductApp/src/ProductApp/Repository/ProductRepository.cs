using Crudtest.DTO;
using Crudtest.Models;   
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crudtest.Repository
{
    public class ProductRepository:IProductRepository
    {
        private CustomerContext dbContext;
        public ProductRepository(CustomerContext context)
        {
            dbContext = context;
        }

        public List<Product> GetProducts()
        {
            return dbContext.Products.ToList();
        }

        public void AddProduct(Product product)
        {
            dbContext.Products.Add(new Product { ProductName = product.ProductName, Price = product.Price});
            dbContext.SaveChanges();
        }
        
        public Product GetProductById(int id)
        {
            return dbContext.Products.Where(x => x.Id == id).FirstOrDefault();
        }
        public void DeleteProduct(int id)
        {
            dbContext.Products.Remove(dbContext.Products.Single(x => x.Id == id));
            dbContext.SaveChanges();
        }
        public void EditProduct(Product product)
        {
            var _product = dbContext.Products.FirstOrDefault(x => x.Id == product.Id);
            _product.ProductName = product.ProductName;
            _product.Price = product.Price;          
            dbContext.SaveChanges();
        }

    }
}
