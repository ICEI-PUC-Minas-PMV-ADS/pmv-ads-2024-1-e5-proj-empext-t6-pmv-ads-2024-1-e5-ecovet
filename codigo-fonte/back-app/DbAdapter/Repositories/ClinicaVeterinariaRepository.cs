using Domain.Dto;
using Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace DbAdapter.Repositories
{
    public class ClinicaVeterinariaRepository : IClinicaVeterinariaRepository
    {
        private readonly EcoVetContext ecoVetContext;

        public ClinicaVeterinariaRepository(EcoVetContext ecoVetContext)
        {
            this.ecoVetContext = ecoVetContext;
        }

        public async Task InserirClinica()
        {
            // Criação de um novo objeto ClinicaVeterinaria com dados mockados
            var novaClinica = new ClinicaVeterinaria
            {
                Nome = "Clínica Vet Amigos",
                Endereco = "Rua dos Veterinários, 123",
                Senha = "senha123", // Lembre-se de aplicar uma hash na senha em uma aplicação real
                Telefone = "11999999999",
                Email = "contato@vetamigos.com.br",
                DescricaoDosServicos = "Serviços veterinários completos, incluindo consultas, cirurgias e vacinação."
            };

            // Adicionando a nova clínica ao contexto
            ecoVetContext.ClinicasVeterinarias.Add(novaClinica);

            // Salvando as alterações no banco de dados
            await ecoVetContext.SaveChangesAsync();
        }

        public async Task<ClinicaVeterinaria> ObterClinicaLoginAsync(string email, string senha)
        {
            return await ecoVetContext.ClinicasVeterinarias
                        .FirstOrDefaultAsync(c => c.Email == email && c.Senha == senha);
        }

        public async Task<IEnumerable<ClinicaVeterinaria>> ObterClinicasVeterinariasAsync()
        {
           return await ecoVetContext.ClinicasVeterinarias.ToListAsync(); 
        }
    }
}
