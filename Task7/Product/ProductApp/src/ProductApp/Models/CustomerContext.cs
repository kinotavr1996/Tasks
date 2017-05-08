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
            modelBuilder.Entity<Product>().ToTable("Product");

            modelBuilder.Entity<Product>()
                .Property(p => p.Price).HasColumnType("Money");

            modelBuilder.Entity<Product>()
                .Property(p => p.ProductName).HasMaxLength(256).IsRequired();


        }
        public DbSet<Product> Products { get; set; }     

    }
}
