using CustomerApp.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CustomerApp.Configuration
{
    internal class CustomerConfiguration : DbEntityConfiguration<Customer>
    {
        public override void Configure(EntityTypeBuilder<Customer> entity)
        {
            entity.ToTable("Customer");

            entity.HasKey(c => c.Id);
            entity.Property(c => c.FirstName).HasMaxLength(255).IsRequired();
            entity.Property(c => c.LastName).HasMaxLength(255).IsRequired();
            entity.Property(c => c.Email).HasMaxLength(255).IsRequired(false);
            entity.Property(c => c.PhoneNumber).HasMaxLength(255).IsRequired(false);
            // etc.
        }
    }
}
