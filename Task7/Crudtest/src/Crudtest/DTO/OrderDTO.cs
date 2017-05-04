using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crudtest.DTO
{
    public class OrderDTO
    {                                
       public List<ProductDTO> Products { get; set; }
       public DateTime OrderDate { get; set; }
    }
}
