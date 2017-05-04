using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crudtest.ViewModel
{
    public class CustomerVM
    {             
       
        public string FirstName { get; set; }
        public string Email { get; set; }
        public string LastName { get; set; }  
        public DateTime OrderDate { get; set; }
        public string ProductName { get; set; }
        public double Price { get; set; }

    }
}
