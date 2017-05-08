using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crudtest.Models
{
    public static class DbInitializer
    {
        public static void Initialize(CustomerContext context)
        {              
           var products = new Product[]
            {
            new Product{Price =4036,ProductName="Chemistry"},
            new Product{Price=4022,ProductName="Microeconomics"},
            new Product{Price=4041,ProductName="Macroeconomics"},
            new Product{Price=1045,ProductName="Calculus"},
            new Product{Price=3141,ProductName="Trigonometry"},
            new Product{Price=2021,ProductName="Composition"},
            new Product{Price=2042,ProductName="Literature"}
            };
            foreach (Product c in products)
            {
                context.Products.Add(c);
            }
            context.SaveChanges();     
           
        }
    }
}
