using Crudtest.DTO;
using Crudtest.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crudtest.Repository
{
    public class CustomerRepository:ICustomerRepository
    {
        private CustomerContext dbContext;
        public CustomerRepository(CustomerContext context)
        {
            dbContext = context;
        }

        public List<Customer> GetCustomers()
        {
            return dbContext.Customers.ToList();
        }
        private static DateTime? ConvertToDateTime(string value)
        {
            DateTime convertedDate;
            try
            {
                return Convert.ToDateTime(value);
                
            }
            catch (FormatException)
            {
                Console.WriteLine("'{0}' is not in the proper format.", value);
            }
            return null;
        }
        public IEnumerable<CustomerDTO> GetAllCustomersInfo()
        {
            return  dbContext.Customers.Select(x => new
            {
                Customer = x,
                Order = x.Order.Select(o => new
                {
                    Order = o,
                    Product = o.ProductOrders.Select(s => s.Product)
                })
            })
            .ToList().Select(x => new CustomerDTO { FirstName = x.Customer.FirstName, LastName = x.Customer.LastName, Email = x.Customer.Email,
                OrderList = x.Order.Select(o => new OrderDTO { Products = o.Product.Select(p => new ProductDTO {Price = p.Price, ProductName = p.ProductName }).ToList(), OrderDate = o.Order.OrderDate}).ToList()
            });
           
        }
        public void AddCustomer(Customer customer)
        {
            dbContext.Customers.Add(new Customer { FirstName = customer.FirstName, Email = customer.Email, LastName = customer.LastName });
            dbContext.SaveChanges();
        }
        public Customer GetCustomerById(int id)
        {
            return dbContext.Customers.Where(x => x.Id == id).FirstOrDefault();
        }
        public void Delete(int id)
        {
            var customer = dbContext.Customers.Single(x => x.Id == id);
            foreach(Order o in dbContext.Orders.Where(x => x.CustomerId == customer.Id).ToList())
            {                 
                dbContext.ProductOrder.RemoveRange(dbContext.ProductOrder.Where(x => x.OrderId == o.Id).ToList());
                dbContext.Orders.Remove(o);
            }
            dbContext.Customers.Remove(customer);              
            dbContext.SaveChanges();
        }
        public void EditCustomer(Customer customer)
        {
            var _customer = dbContext.Customers.FirstOrDefault(x => x.Id == customer.Id);
            
            _customer.FirstName = customer.FirstName;
            _customer.LastName = customer.LastName;  
            _customer.Email = customer.Email;           
            dbContext.SaveChanges();
        }

    }
}
