using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DbAdapter.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClinicasVeterinarias",
                columns: table => new
                {
                    IDClinica = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Endereco = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Senha = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Telefone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DescricaoDosServicos = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClinicasVeterinarias", x => x.IDClinica);
                });

            migrationBuilder.CreateTable(
                name: "ProfissionaisVeterinarios",
                columns: table => new
                {
                    IDProfissional = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Especialidade = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Senha = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Telefone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Disponibilidade = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Localizacao = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProfissionaisVeterinarios", x => x.IDProfissional);
                });

            migrationBuilder.CreateTable(
                name: "Vagas",
                columns: table => new
                {
                    IDVaga = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descricao = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Requisitos = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PeriodoDeDisponibilidade = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClinicaVeterinariaIDClinica = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vagas", x => x.IDVaga);
                    table.ForeignKey(
                        name: "FK_Vagas_ClinicasVeterinarias_ClinicaVeterinariaIDClinica",
                        column: x => x.ClinicaVeterinariaIDClinica,
                        principalTable: "ClinicasVeterinarias",
                        principalColumn: "IDClinica",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Candidaturas",
                columns: table => new
                {
                    IDCandidatura = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DataDaCandidatura = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ProfissionalVeterinarioIDProfissional = table.Column<int>(type: "int", nullable: false),
                    VagaIDVaga = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidaturas", x => x.IDCandidatura);
                    table.ForeignKey(
                        name: "FK_Candidaturas_ProfissionaisVeterinarios_ProfissionalVeterinarioIDProfissional",
                        column: x => x.ProfissionalVeterinarioIDProfissional,
                        principalTable: "ProfissionaisVeterinarios",
                        principalColumn: "IDProfissional",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Candidaturas_Vagas_VagaIDVaga",
                        column: x => x.VagaIDVaga,
                        principalTable: "Vagas",
                        principalColumn: "IDVaga",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Candidaturas_ProfissionalVeterinarioIDProfissional",
                table: "Candidaturas",
                column: "ProfissionalVeterinarioIDProfissional");

            migrationBuilder.CreateIndex(
                name: "IX_Candidaturas_VagaIDVaga",
                table: "Candidaturas",
                column: "VagaIDVaga");

            migrationBuilder.CreateIndex(
                name: "IX_Vagas_ClinicaVeterinariaIDClinica",
                table: "Vagas",
                column: "ClinicaVeterinariaIDClinica");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Candidaturas");

            migrationBuilder.DropTable(
                name: "ProfissionaisVeterinarios");

            migrationBuilder.DropTable(
                name: "Vagas");

            migrationBuilder.DropTable(
                name: "ClinicasVeterinarias");
        }
    }
}
