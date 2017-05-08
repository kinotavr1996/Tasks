 using CustomerApp.Configuration;
using Microsoft.EntityFrameworkCore;

namespace CustomerApp.Model
{
    public class CustomerContext : DbContext
    {
        public CustomerContext(DbContextOptions<CustomerContext> options)
          : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.AddConfiguration(new CustomerConfiguration()); 

        }
        public DbSet<Customer> Customers { get; set; }
    }
}
