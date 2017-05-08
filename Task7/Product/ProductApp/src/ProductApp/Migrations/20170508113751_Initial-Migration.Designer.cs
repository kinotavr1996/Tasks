using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Crudtest.Models;

namespace WebApplication1.Migrations
{
    [DbContext(typeof(CustomerContext))]
    [Migration("20170508113751_Initial-Migration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Crudtest.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal>("Price")
                        .HasColumnType("Money");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.ToTable("Product");
                });
        }
    }
}
