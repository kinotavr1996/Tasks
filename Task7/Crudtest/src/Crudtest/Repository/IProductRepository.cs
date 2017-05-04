using Crudtest.Models;
using Crudtest.ViewModel;
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

        List<CustomerVM> GetAllInfo();
    }
}
