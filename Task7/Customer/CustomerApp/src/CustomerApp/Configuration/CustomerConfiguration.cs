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
            entity.Property(c => c.FirstName).HasMaxLength(256).IsRequired();
            entity.Property(c => c.LastName).HasMaxLength(256).IsRequired();
            entity.Property(c => c.Email).HasMaxLength(256).IsRequired(false);
            entity.Property(c => c.PhoneNumber).HasMaxLength(256).IsRequired(false);
            // etc.
        }
    }
}
