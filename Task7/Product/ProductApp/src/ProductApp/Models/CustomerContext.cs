using Microsoft.EntityFrameworkCore;

namespace Crudtest.Models
{
    public class CustomerContext:DbContext
    {
        public CustomerContext(DbContextOptions<CustomerContext> options)
          : base(options)
        {

        }            
       
        public DbSet<Product> Products { get; set; }     

    }
}
