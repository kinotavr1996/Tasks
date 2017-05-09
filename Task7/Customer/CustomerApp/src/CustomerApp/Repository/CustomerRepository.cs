using CustomerApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Repository
{
    public class CustomerRepository: ICustomerRepository
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
        public List<Customer> GetCustomersWithParametrs(int pageSize, string orderBy, string sortBy = "ASC", int page = 1)
        {
            page = page - 1;
            switch (sortBy)
            {
                case "fullName":
                    return orderBy == "ASC" ? dbContext.Customers.OrderBy(s => s.Email).Skip(page * pageSize).Take(pageSize).ToList() : dbContext.Customers.OrderByDescending(s => s.Email).Skip(page * pageSize).Take(pageSize).ToList();                  
                case "email":
                    return orderBy == "ASC" ? dbContext.Customers.OrderBy(s => s.Email).Skip(page * pageSize).Take(pageSize).ToList() : dbContext.Customers.OrderByDescending(s => s.Email).Skip(page * pageSize).Take(pageSize).ToList();                    
                case "phoneNumber":
                    return  orderBy == "ASC" ? dbContext.Customers.OrderBy(s => s.PhoneNumber).Skip(page * pageSize).Take(pageSize).ToList() : dbContext.Customers.OrderByDescending(s => s.PhoneNumber).Skip(page * pageSize).Take(pageSize).ToList();                   
                default:
                    return orderBy == "ASC" ? dbContext.Customers.OrderBy(s => s.Email).Skip(page * pageSize).Take(pageSize).ToList() : dbContext.Customers.OrderByDescending(s => s.Email).Skip(page * pageSize).Take(pageSize).ToList();
                   
            }

        }
        public void AddCustomer(Customer customer)
        {
            dbContext.Customers.Add(new Customer { FirstName = customer.FirstName, Email = customer.Email, LastName = customer.LastName, PhoneNumber = customer.PhoneNumber });
            dbContext.SaveChanges();
        }
        public Customer GetCustomerById(int id)
        {
            return dbContext.Customers.Where(x => x.Id == id).FirstOrDefault();
        }
        public void Delete(int id)
        {
            var customer = dbContext.Customers.SingleOrDefault(x => x.Id == id);              
            dbContext.Customers.Remove(customer);
            dbContext.SaveChanges();
        }
        public void EditCustomer(Customer customer)
        {
            var _customer = dbContext.Customers.SingleOrDefault(x => x.Id == customer.Id);

            _customer.FirstName = customer.FirstName;
            _customer.LastName = customer.LastName;
            _customer.Email = customer.Email;
            _customer.PhoneNumber = customer.PhoneNumber;
            _customer.PhoneNumber = customer.PhoneNumber;

            dbContext.SaveChanges();
        }
    }
}
