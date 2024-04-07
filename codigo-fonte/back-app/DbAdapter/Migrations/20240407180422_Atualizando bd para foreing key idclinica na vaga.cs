using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DbAdapter.Migrations
{
    public partial class Atualizandobdparaforeingkeyidclinicanavaga : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vagas_ClinicasVeterinarias_IdProfissionalVeterinario",
                table: "Vagas");

            migrationBuilder.RenameColumn(
                name: "IdProfissionalVeterinario",
                table: "Vagas",
                newName: "IDClinicaVeterinaria");

            migrationBuilder.RenameIndex(
                name: "IX_Vagas_IdProfissionalVeterinario",
                table: "Vagas",
                newName: "IX_Vagas_IDClinicaVeterinaria");

            migrationBuilder.AddForeignKey(
                name: "FK_Vagas_ClinicasVeterinarias_IDClinicaVeterinaria",
                table: "Vagas",
                column: "IDClinicaVeterinaria",
                principalTable: "ClinicasVeterinarias",
                principalColumn: "IDClinica",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vagas_ClinicasVeterinarias_IDClinicaVeterinaria",
                table: "Vagas");

            migrationBuilder.RenameColumn(
                name: "IDClinicaVeterinaria",
                table: "Vagas",
                newName: "IdProfissionalVeterinario");

            migrationBuilder.RenameIndex(
                name: "IX_Vagas_IDClinicaVeterinaria",
                table: "Vagas",
                newName: "IX_Vagas_IdProfissionalVeterinario");

            migrationBuilder.AddForeignKey(
                name: "FK_Vagas_ClinicasVeterinarias_IdProfissionalVeterinario",
                table: "Vagas",
                column: "IdProfissionalVeterinario",
                principalTable: "ClinicasVeterinarias",
                principalColumn: "IDClinica",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
