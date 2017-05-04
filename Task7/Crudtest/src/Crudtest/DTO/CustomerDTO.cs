using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crudtest.DTO
{
    public class CustomerDTO
    {
        public string FirstName { get; set; }
        public string Email { get; set; }
        public string LastName { get; set; }
        public List<OrderDTO> OrderList { get; set; }

    }
}
