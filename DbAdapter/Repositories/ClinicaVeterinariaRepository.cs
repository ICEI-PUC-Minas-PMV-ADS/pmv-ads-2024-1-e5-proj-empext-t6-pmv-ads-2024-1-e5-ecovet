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

        public async Task<IEnumerable<ClinicaVeterinaria>> ObterClinicasVeterinariasAsync()
        {
           return await ecoVetContext.ClinicasVeterinarias.ToListAsync(); 
        }
    }
}
