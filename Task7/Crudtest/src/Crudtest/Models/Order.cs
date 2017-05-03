using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crudtest.Models
{
    public class Order
    {
        public int CustomerId { get; set; }    
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public Customer Customer { get; set; }
        public ICollection<ProductOrder> ProductOrders { get; set; }
    }
}

