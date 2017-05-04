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

        public List<Order> GetOrders()
        {
            return dbContext.Orders.ToList();
        }

        public void AddOrder(Order order)
        {
            dbContext.Orders.Add(new Order { OrderDate = order.OrderDate});
            dbContext.SaveChanges();
        }
        public Order GetOrderById(int id)
        {
            return dbContext.Orders.Where(x => x.Id == id).FirstOrDefault();
        }
        public void DeleteOrder(int id)
        {
            dbContext.Orders.Remove(dbContext.Orders.Single(x => x.Id == id));
            dbContext.SaveChanges();
        }
        public void EditOrder(Order order)
        {
            var _order = dbContext.Orders.FirstOrDefault(x => x.Id == order.Id);
            _order.OrderDate = order.OrderDate;
            dbContext.SaveChanges();
        }
    }
}
