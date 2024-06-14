﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace DbAdapter.Migrations
{
    [DbContext(typeof(EcoVetContext))]
    partial class EcoVetContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.28")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Domain.Dto.Candidatura", b =>
                {
                    b.Property<int>("IDCandidatura")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("IDCandidatura"));

                    b.Property<DateTime>("DataDaCandidatura")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("IdProfissionalVeterinario")
                        .HasColumnType("integer");

                    b.Property<int>("IdVaga")
                        .HasColumnType("integer");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("IDCandidatura");

                    b.HasIndex("IdVaga");

                    b.ToTable("Candidaturas");
                });

            modelBuilder.Entity("Domain.Dto.ClinicaVeterinaria", b =>
                {
                    b.Property<int>("IDClinica")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("IDClinica"));

                    b.Property<string>("DescricaoDosServicos")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Endereco")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("IDClinica");

                    b.ToTable("ClinicasVeterinarias");
                });

            modelBuilder.Entity("Domain.Dto.ProfissionalVeterinario", b =>
                {
                    b.Property<int>("IDProfissional")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("IDProfissional"));

                    b.Property<string>("Disponibilidade")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Especialidade")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Localizacao")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("IDProfissional");

                    b.ToTable("ProfissionaisVeterinarios");
                });

            modelBuilder.Entity("Domain.Dto.Vaga", b =>
                {
                    b.Property<int>("IDVaga")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("IDVaga"));

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Experiencia")
                        .HasColumnType("integer");

                    b.Property<int>("IDClinicaVeterinaria")
                        .HasColumnType("integer");

                    b.Property<string>("PeriodoDeDisponibilidade")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Requisitos")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("StatusVaga")
                        .HasColumnType("integer");

                    b.Property<string>("TituloVaga")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("IDVaga");

                    b.HasIndex("IDClinicaVeterinaria");

                    b.ToTable("Vagas");
                });

            modelBuilder.Entity("Domain.Dto.Candidatura", b =>
                {
                    b.HasOne("Domain.Dto.Vaga", null)
                        .WithMany()
                        .HasForeignKey("IdVaga")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Domain.Dto.Vaga", b =>
                {
                    b.HasOne("Domain.Dto.ClinicaVeterinaria", null)
                        .WithMany()
                        .HasForeignKey("IDClinicaVeterinaria")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
