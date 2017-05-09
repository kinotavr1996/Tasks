using WriterApp.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WriterApp.Configuration
{
    internal class WriterConfiguration : DbEntityConfiguration<Writer>
    {
        public override void Configure(EntityTypeBuilder<Writer> entity)
        {
            entity.ToTable("Writer");  
            entity.HasKey(c => c.Id);
            entity.Property(c => c.FirstName).HasMaxLength(256).IsRequired();
            entity.Property(c => c.LastName).HasMaxLength(256).IsRequired();
            entity.Property(c => c.DateOfBirth).IsRequired();
            entity.Property(c => c.Biography).HasMaxLength(int.MaxValue).IsRequired(false);             
        }
    }
}
