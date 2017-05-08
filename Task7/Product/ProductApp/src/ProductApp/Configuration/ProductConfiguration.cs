using Crudtest.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Crudtest.Configuration
{
    internal class ProductConfiguration : DbEntityConfiguration<Product>
    {
        public override void Configure(EntityTypeBuilder<Product> entity)
        {
            entity.ToTable("Product");

            entity.HasKey(c => c.Id);
            entity.Property(c => c.ProductName).HasMaxLength(255).IsRequired().HasColumnName("Name");
            entity.Property(c => c.Price).HasMaxLength(255).HasColumnType("Money").IsRequired(false);
                                                                           
            // etc.
        }
    }
}
