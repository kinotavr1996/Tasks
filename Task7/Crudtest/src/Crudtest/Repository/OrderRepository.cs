using Crudtest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crudtest.Repository
{
     
    public class OrderRepository:IOrderRepository
    {
        private CustomerContext dbContext;
        public OrderRepository(CustomerContext context)
        {
            dbContext = context;
        }

        public List<Customer> GetOrders()
        {
            return dbContext.Customers.ToList();
        }

        public void AddOrder(Order order)
        {
            dbContext.Orders.Add(new Order { OrderDate = order.OrderDate});
            dbContext.SaveChanges();
        }
        public Order GetOrderById(int id)
        {
            return dbContext.Orders.Where(x => x.OrderId == id).FirstOrDefault();
        }
        public void Delete(int id)
        {
            dbContext.Orders.Remove(dbContext.Orders.Single(x => x.OrderId == id));
            dbContext.SaveChanges();
        }
        public void EditCustomer(Order order)
        {
            var _order = dbContext.Orders.FirstOrDefault(x => x.OrderId == order.OrderId);
            _order.OrderDate = order.OrderDate;
            dbContext.SaveChanges();
        }
    }
}
