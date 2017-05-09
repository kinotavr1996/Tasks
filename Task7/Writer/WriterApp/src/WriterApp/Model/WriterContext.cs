using Microsoft.EntityFrameworkCore;
using WriterApp.Configuration;

namespace WriterApp.Model
{
    public class WriterContext  : DbContext
    {  
        public WriterContext(DbContextOptions<WriterContext> options)
          : base(options)
        {  
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);  
            modelBuilder.AddConfiguration(new WriterConfiguration());  
        }
        public DbSet<Writer> Writers { get; set; }
    }
}
