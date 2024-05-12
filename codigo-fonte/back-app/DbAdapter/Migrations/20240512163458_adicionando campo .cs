using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DbAdapter.Migrations
{
    public partial class adicionandocampo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.AddColumn<string>(
                name: "TituloVaga",
                table: "Vagas",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ClinicaVeterinariaIDClinica",
                table: "Vagas",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
