﻿using CustomerApp.Corre;
using CustomerApp.Model;
using System.Collections.Generic;



namespace CustomerApp.Repository
{
    public interface ICustomerRepository
    {
        List<Customer> GetCustomers();
        PagedList<Customer> GetCustomersWithParametrs(int pageSize, string filter, string orderBy, string sortBy = "ASC", int page = 1);

        Customer GetCustomerById(int id);
        void AddCustomer(Customer customer);
        void Delete(int id);
        void EditCustomer(Customer order);

    }
}
