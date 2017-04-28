using CoreWebAPIAndAngular.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWebAPIAndAngular.Repository
{
    //Fake Repository that's added as a Singleton in Startup.cs
    public class CustomersRepository : ICustomersRepository
    {
        private CustomerContext dbContext;
        public CustomersRepository(CustomerContext context) 
        {
            dbContext = context;
        }
        
        public List<Customer> GetCustomers()
        {
           return dbContext.Customer.Include(c=>c.Address).ToList(); 
        }
        public List<Customer> GetCustomersWithParametrs(string sortBy, string orderBy, int limit, int pageNumber)
        {
            int _skipPage = pageNumber * limit;
            IQueryable<Customer> customers = dbContext.Customer.Include(c => c.Address);                       
            switch (sortBy)
            {
                case "firstName":
                    customers = (orderBy == "ASC") ? customers.OrderBy(x => x.FirstName) : customers.OrderByDescending(x => x.FirstName);
                    break;
                case "lastName":
                    customers = (orderBy == "ASC") ? customers.OrderBy(x => x.LastName) : customers.OrderByDescending(x => x.LastName);
                    break;
                case "email":
                    customers = (orderBy == "ASC") ? customers.OrderBy(x => x.Email) : customers.OrderByDescending(x => x.Email);
                    break;
                default:
                    break;
            }


            return customers.Skip(_skipPage).Take(limit).ToList(); 
        }
        public void AddCustomer(Customer customer)
        {
            dbContext.Customer.Add(customer);
            dbContext.SaveChanges();
        }
        public Customer GetCustomerById(int id)
        {            
             return  dbContext.Customer.Where(x => x.Id == id).FirstOrDefault();              
        }
        public void Delete(int id)
        {
            dbContext.Customer.Remove(dbContext.Customer.Single(x => x.Id == id));
            dbContext.SaveChanges();
        }
    }
}
