using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace DbAdapter.Migrations
{
    public partial class Heroku : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClinicasVeterinarias",
                columns: table => new
                {
                    IDClinica = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nome = table.Column<string>(type: "text", nullable: false),
                    Endereco = table.Column<string>(type: "text", nullable: false),
                    Senha = table.Column<string>(type: "text", nullable: false),
                    Telefone = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    DescricaoDosServicos = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClinicasVeterinarias", x => x.IDClinica);
                });

            migrationBuilder.CreateTable(
                name: "ProfissionaisVeterinarios",
                columns: table => new
                {
                    IDProfissional = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nome = table.Column<string>(type: "text", nullable: false),
                    Especialidade = table.Column<string>(type: "text", nullable: false),
                    Senha = table.Column<string>(type: "text", nullable: false),
                    Telefone = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Disponibilidade = table.Column<string>(type: "text", nullable: false),
                    Localizacao = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProfissionaisVeterinarios", x => x.IDProfissional);
                });

            migrationBuilder.CreateTable(
                name: "Vagas",
                columns: table => new
                {
                    IDVaga = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Descricao = table.Column<string>(type: "text", nullable: false),
                    Requisitos = table.Column<string>(type: "text", nullable: false),
                    PeriodoDeDisponibilidade = table.Column<string>(type: "text", nullable: false),
                    ClinicaVeterinariaIDClinica = table.Column<int>(type: "integer", nullable: false)
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
                    IDCandidatura = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Status = table.Column<string>(type: "text", nullable: false),
                    DataDaCandidatura = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ProfissionalVeterinarioIDProfissional = table.Column<int>(type: "integer", nullable: false),
                    VagaIDVaga = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidaturas", x => x.IDCandidatura);
                    table.ForeignKey(
                        name: "FK_Candidaturas_ProfissionaisVeterinarios_ProfissionalVeterina~",
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
