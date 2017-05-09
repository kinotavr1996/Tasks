using CustomerApp.Corre;
using CustomerApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Repository
{
    public class CustomerRepository : ICustomerRepository
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

        public PagedList<Customer> GetCustomersWithParametrs(int pageSize, string filter, string orderBy, string sortBy = "fullname", int page = 1)
        {
            page = page - 1;

            var query = dbContext.Customers.AsQueryable();

            if (!String.IsNullOrEmpty(filter))
            {
                query = query.Where(s => s.FirstName.ToUpper().Contains(filter.ToUpper()) || s.LastName.ToUpper().Contains(filter.ToUpper()));
            }

            switch (sortBy)
            {
                case "fullName":
                    query = orderBy == "ASC" ? query.OrderBy(s => s.LastName) : query.OrderByDescending(s => s.LastName);
                    break;
                case "email":
                    query = orderBy == "ASC" ? query.OrderBy(s => s.Email) : query.OrderByDescending(s => s.Email);
                    break;
                case "phoneNumber":
                    query = orderBy == "ASC" ? query.OrderBy(s => s.PhoneNumber) : query.OrderByDescending(s => s.PhoneNumber);
                    break;
                default:
                    query = orderBy == "ASC" ? query.OrderBy(s => s.Email) : query.OrderByDescending(s => s.Email);
                    break;
            }

            return new PagedList<Customer>(query, page, pageSize);
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
