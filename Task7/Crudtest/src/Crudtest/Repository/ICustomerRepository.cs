using Crudtest.DTO;
using Crudtest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crudtest.Repository
{
    public interface ICustomerRepository
    {
        List<Customer> GetCustomers();
        Customer GetCustomerById(int id);
        void AddCustomer(Customer customer);
        void Delete(int id);
        void EditCustomer(Customer order);

        IEnumerable<CustomerDTO> GetAllCustomersInfo();
    }
}
