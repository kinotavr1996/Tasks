using Microsoft.EntityFrameworkCore;

namespace Crudtest.Models
{
    public class CustomerContext:DbContext
    {
        public CustomerContext(DbContextOptions<CustomerContext> options)
          : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=OLEG-PC;Database=product;Trusted_Connection=True;");
        }
       
        public DbSet<Product> Products { get; set; }     

    }
}
