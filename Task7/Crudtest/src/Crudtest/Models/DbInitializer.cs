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
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Customers.Any())
            {
                return;   // DB has been seeded
            }

            var customers = new Customer[]
            {
            new Customer{FirstName="Carson",LastName="Alexander",Email="oleg2gmail.com"},
            new Customer{FirstName="Meredith",LastName="Alonso",Email=DateTime.Parse("2002-09-01").ToString()},
            new Customer{FirstName="Arturo",LastName="Anand",Email=DateTime.Parse("2003-09-01").ToString()},
            new Customer{FirstName="Gytis",LastName="Barzdukas",Email=DateTime.Parse("2002-09-01").ToString()},
            new Customer{FirstName="Yan",LastName="Li",Email=DateTime.Parse("2002-09-01").ToString()},
            new Customer{FirstName="Peggy",LastName="Justice",Email=DateTime.Parse("2001-09-01").ToString()},
            new Customer{FirstName="Laura",LastName="Norman",Email=DateTime.Parse("2003-09-01").ToString()},
            new Customer{FirstName="Nino",LastName="Olivetto",Email=DateTime.Parse("2005-09-01").ToString()}
            };
            foreach (Customer s in customers)
            {
                context.Customers.Add(s);
            }
            context.SaveChanges();

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

            var orders = new Order[]
            {
            new Order{OrderDate = DateTime.Parse("2002-09-01")},
            new Order{OrderDate = DateTime.Parse("2003-07-01")},
            new Order{OrderDate = DateTime.Parse("2004-09-01")},
            new Order{OrderDate = DateTime.Parse("2005-09-01")},
            new Order{OrderDate = DateTime.Parse("2006-09-01")},
            new Order{OrderDate = DateTime.Parse("2007-09-01")},
            new Order{OrderDate = DateTime.Parse("2008-09-01")},
            new Order{OrderDate = DateTime.Parse("2009-09-01")},
            new Order{OrderDate = DateTime.Parse("2003-09-01")},
            new Order{OrderDate = DateTime.Parse("2001-09-01")},
            new Order{OrderDate = DateTime.Parse("2000-09-01")},
            new Order{OrderDate = DateTime.Parse("2003-09-01")}
            };
            foreach (Order e in orders)
            {    
                context.Orders.Add(e);
            }
            context.SaveChanges();
        }
    }
}
