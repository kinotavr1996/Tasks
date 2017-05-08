using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class Nullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Price",
                table: "Product",
                type: "Money",
                maxLength: 255,
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "Money",
                oldMaxLength: 255);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Price",
                table: "Product",
                type: "Money",
                maxLength: 255,
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "Money",
                oldMaxLength: 255,
                oldNullable: true);
        }
    }
}
