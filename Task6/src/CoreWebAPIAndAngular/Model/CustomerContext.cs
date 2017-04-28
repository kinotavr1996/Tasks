using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace CoreWebAPIAndAngular.Model
{
    public class CustomerContext : DbContext
    {
        public CustomerContext(DbContextOptions<CustomerContext> options)
            : base(options)
        {
           
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=OLEG-PC;Database=customers;Trusted_Connection=True;");
        }
        public DbSet<Address> Address { get; set; }
        public DbSet<Customer> Customer { get; set; }             
        
     
    }

}

