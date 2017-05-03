using Crudtest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crudtest.Repository
{
    public interface IOrderRepository
    {
        List<Order> GetOrders();  
        Order GetOrderById(int id);
        void AddOrder(Order product);
        void DeleteOrder(int id);      
        void EditOrder(Order order);
    }
}
