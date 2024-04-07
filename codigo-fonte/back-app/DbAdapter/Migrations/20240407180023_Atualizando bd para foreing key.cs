using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DbAdapter.Migrations
{
    public partial class Atualizandobdparaforeingkey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Candidaturas_ProfissionaisVeterinarios_ProfissionalVeterina~",
                table: "Candidaturas");

            migrationBuilder.DropForeignKey(
                name: "FK_Candidaturas_Vagas_VagaIDVaga",
                table: "Candidaturas");

            migrationBuilder.DropForeignKey(
                name: "FK_Vagas_ClinicasVeterinarias_ClinicaVeterinariaIDClinica",
                table: "Vagas");

            migrationBuilder.DropIndex(
                name: "IX_Candidaturas_ProfissionalVeterinarioIDProfissional",
                table: "Candidaturas");

            migrationBuilder.RenameColumn(
                name: "ClinicaVeterinariaIDClinica",
                table: "Vagas",
                newName: "IdProfissionalVeterinario");

            migrationBuilder.RenameIndex(
                name: "IX_Vagas_ClinicaVeterinariaIDClinica",
                table: "Vagas",
                newName: "IX_Vagas_IdProfissionalVeterinario");

            migrationBuilder.RenameColumn(
                name: "VagaIDVaga",
                table: "Candidaturas",
                newName: "IdVaga");

            migrationBuilder.RenameColumn(
                name: "ProfissionalVeterinarioIDProfissional",
                table: "Candidaturas",
                newName: "IdProfissionalVeterinario");

            migrationBuilder.RenameIndex(
                name: "IX_Candidaturas_VagaIDVaga",
                table: "Candidaturas",
                newName: "IX_Candidaturas_IdVaga");

            migrationBuilder.AddForeignKey(
                name: "FK_Candidaturas_Vagas_IdVaga",
                table: "Candidaturas",
                column: "IdVaga",
                principalTable: "Vagas",
                principalColumn: "IDVaga",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Vagas_ClinicasVeterinarias_IdProfissionalVeterinario",
                table: "Vagas",
                column: "IdProfissionalVeterinario",
                principalTable: "ClinicasVeterinarias",
                principalColumn: "IDClinica",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Candidaturas_Vagas_IdVaga",
                table: "Candidaturas");

            migrationBuilder.DropForeignKey(
                name: "FK_Vagas_ClinicasVeterinarias_IdProfissionalVeterinario",
                table: "Vagas");

            migrationBuilder.RenameColumn(
                name: "IdProfissionalVeterinario",
                table: "Vagas",
                newName: "ClinicaVeterinariaIDClinica");

            migrationBuilder.RenameIndex(
                name: "IX_Vagas_IdProfissionalVeterinario",
                table: "Vagas",
                newName: "IX_Vagas_ClinicaVeterinariaIDClinica");

            migrationBuilder.RenameColumn(
                name: "IdVaga",
                table: "Candidaturas",
                newName: "VagaIDVaga");

            migrationBuilder.RenameColumn(
                name: "IdProfissionalVeterinario",
                table: "Candidaturas",
                newName: "ProfissionalVeterinarioIDProfissional");

            migrationBuilder.RenameIndex(
                name: "IX_Candidaturas_IdVaga",
                table: "Candidaturas",
                newName: "IX_Candidaturas_VagaIDVaga");

            migrationBuilder.CreateIndex(
                name: "IX_Candidaturas_ProfissionalVeterinarioIDProfissional",
                table: "Candidaturas",
                column: "ProfissionalVeterinarioIDProfissional");

            migrationBuilder.AddForeignKey(
                name: "FK_Candidaturas_ProfissionaisVeterinarios_ProfissionalVeterina~",
                table: "Candidaturas",
                column: "ProfissionalVeterinarioIDProfissional",
                principalTable: "ProfissionaisVeterinarios",
                principalColumn: "IDProfissional",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Candidaturas_Vagas_VagaIDVaga",
                table: "Candidaturas",
                column: "VagaIDVaga",
                principalTable: "Vagas",
                principalColumn: "IDVaga",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Vagas_ClinicasVeterinarias_ClinicaVeterinariaIDClinica",
                table: "Vagas",
                column: "ClinicaVeterinariaIDClinica",
                principalTable: "ClinicasVeterinarias",
                principalColumn: "IDClinica",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
