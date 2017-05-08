using CustomerApp.Model;
using System.Collections.Generic;



namespace CustomerApp.Repository
{
    public interface ICustomerRepository
    {
        List<Customer> GetCustomers();
        Customer GetCustomerById(int id);
        void AddCustomer(Customer customer);
        void Delete(int id);
        void EditCustomer(Customer order);      
    }
}
