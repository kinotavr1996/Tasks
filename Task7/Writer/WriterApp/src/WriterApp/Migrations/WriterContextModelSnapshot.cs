using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using WriterApp.Model;

namespace WriterApp.Migrations
{
    [DbContext(typeof(WriterContext))]
    partial class WriterContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WriterApp.Model.Writer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Biography")
                        .HasMaxLength(2147483647);

                    b.Property<DateTime?>("DateOfBirth")
                        .IsRequired();

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(256);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.ToTable("Writer");
                });
        }
    }
}
