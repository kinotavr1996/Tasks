using Crudtest.Models;
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
            dbContext.Customers.Remove(dbContext.Customers.Single(x => x.Id == id));
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
