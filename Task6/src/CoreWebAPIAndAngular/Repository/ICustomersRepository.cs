using System.Collections.Generic;
using CoreWebAPIAndAngular.Model;

namespace CoreWebAPIAndAngular.Repository
{
    public interface ICustomersRepository
    {
        List<Customer> GetCustomers();
        Customer GetCustomerById(int id); 
        void AddCustomer(Customer customer);
        void Delete(int id);

        List<Customer> GetCustomersWithParametrs(string sortBy, string orderBy, int limit, int pageNumber);
    }
}