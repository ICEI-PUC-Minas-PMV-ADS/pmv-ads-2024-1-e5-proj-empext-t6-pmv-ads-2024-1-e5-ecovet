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

        public async Task InserirClinicaAsync(ClinicaVeterinaria clinicaVeterinaria)
        {
            ecoVetContext.ClinicasVeterinarias.Add(clinicaVeterinaria);

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

        public async Task<ClinicaVeterinaria> ObterClinicasVeterinariasPorIdAsync(int idClinicaVeterinaria)
        {
            return await ecoVetContext.ClinicasVeterinarias.FirstOrDefaultAsync(c => c.IDClinica == idClinicaVeterinaria);
        }
    }
}
