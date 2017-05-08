using Crudtest.Models;    
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crudtest.Repository
{
    public interface IProductRepository
    {
        List<Product> GetProducts();
        Product GetProductById(int id);
        void AddProduct(Product product);
        void DeleteProduct(int id);           
        void EditProduct(Product product);   
        
    }
}
