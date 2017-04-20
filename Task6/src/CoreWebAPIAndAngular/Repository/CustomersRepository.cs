using CoreWebAPIAndAngular.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWebAPIAndAngular.Repository
{
    //Fake Repository that's added as a Singleton in Startup.cs
    public class CustomersRepository : ICustomersRepository
    {
        //Cheap way to create a cache of data
        //Purely for demo!
        List<Customer> _customers = new List<Customer>
        {

                new Customer { Id = 1, FirstName="John", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=1, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 2, FirstName="Jane", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=2, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 3, FirstName="Tina", LastName="Smith",  Email = "email@mail.com" ,
                                Address = new Address { Id=3, City="Redmond", State="WA", Zip=98052 }},
                 new Customer { Id = 4, FirstName="John", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=1, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 5, FirstName="Jane", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=2, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 6, FirstName="Tina", LastName="Smith",  Email = "email@mail.com" ,
                                Address = new Address { Id=3, City="Redmond", State="WA", Zip=98052 }},
                 new Customer { Id = 7, FirstName="John", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=1, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 8, FirstName="Jane", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=2, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 9, FirstName="Tina", LastName="Smith",  Email = "email@mail.com" ,
                                Address = new Address { Id=3, City="Redmond", State="WA", Zip=98052 }},
                 new Customer { Id = 10, FirstName="John", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=1, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 11, FirstName="Jane", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=2, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 323, FirstName="Tina", LastName="Smith",  Email = "email@mail.com" ,
                                Address = new Address { Id=3, City="Redmond", State="WA", Zip=98052 }},
                 new Customer { Id = 42, FirstName="John", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=1, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 21, FirstName="Jane", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=2, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 32, FirstName="Tina", LastName="Smith",  Email = "email@mail.com" ,
                                Address = new Address { Id=3, City="Redmond", State="WA", Zip=98052 }},
                 new Customer { Id = 13, FirstName="John", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=1, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 24, FirstName="Jane", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=2, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 35, FirstName="Tina", LastName="Smith",  Email = "email@mail.com" ,
                                Address = new Address { Id=3, City="Redmond", State="WA", Zip=98052 }},
                 new Customer { Id = 16, FirstName="John", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=1, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 27, FirstName="Jane", LastName="Doe", Email = "email@mail.com" ,
                                Address = new Address { Id=2, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 39, FirstName="Tina", LastName="Smith",  Email = "email@mail.com" ,
                                Address = new Address { Id=3, City="Redmond", State="WA", Zip=98052 }},

        };

        public List<Customer> Customers
        {
            get
            {
                return _customers;
            }
        }

    }
}
