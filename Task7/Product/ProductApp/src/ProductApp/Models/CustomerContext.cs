using Crudtest.Configuration;
using Microsoft.EntityFrameworkCore;

namespace Crudtest.Models
{
    public class CustomerContext:DbContext
    {
        public CustomerContext(DbContextOptions<CustomerContext> options)
          : base(options)
        {
                
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.AddConfiguration(new ProductConfiguration());


        }
        public DbSet<Product> Products { get; set; }     

    }
}
