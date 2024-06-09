using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DbAdapter.Migrations
{
    public partial class AdicionandoExperienciaEnum : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Experiencia",
                table: "Vagas",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Experiencia",
                table: "Vagas");
        }
    }
}
