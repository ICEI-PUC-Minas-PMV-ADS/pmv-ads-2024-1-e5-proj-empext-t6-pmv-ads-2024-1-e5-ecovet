using Domain.Dto;
using Microsoft.EntityFrameworkCore;

public class EcoVetContext : DbContext
{
    public DbSet<ClinicaVeterinaria> ClinicasVeterinarias { get; set; }
    public DbSet<ProfissionalVeterinario> ProfissionaisVeterinarios { get; set; }
    public DbSet<Vaga> Vagas { get; set; }
    public DbSet<Candidatura> Candidaturas { get; set; }

    public EcoVetContext(DbContextOptions<EcoVetContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configuração do relacionamento um-para-muitos entre ClinicaVeterinaria e Vaga
        modelBuilder.Entity<Vaga>()
            .HasOne<ClinicaVeterinaria>() // Vaga tem uma ClinicaVeterinaria
            .WithMany() // Uma ClinicaVeterinaria tem muitas Vagas
            .HasForeignKey(v => v.IDClinicaVeterinaria) // Chave estrangeira em Vaga
            .OnDelete(DeleteBehavior.Cascade); // Comportamento em cascata para deleção

        // Configuração do relacionamento um-para-muitos entre Vaga e Candidatura
        modelBuilder.Entity<Candidatura>()
            .HasOne<Vaga>() // Candidatura tem uma Vaga
            .WithMany() // Uma Vaga tem muitas Candidaturas
            .HasForeignKey(c => c.IdVaga) // Chave estrangeira em Candidatura
            .OnDelete(DeleteBehavior.Cascade); // Comportamento em cascata para deleção

        // Nota: ProfissionalVeterinario e Candidatura se relacionam através de Vaga,
        // então não precisamos de uma configuração direta entre eles aqui.
    }
}
