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
        // Configurações das chaves estrangeiras podem ser feitas aqui, se necessário
    }
}
