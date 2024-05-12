using Domain.Dto;
using Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace DbAdapter.Repositories
{
    public class VagaRepository : IVagaRepository
    {
        private readonly EcoVetContext ecoVetContext;

        public VagaRepository(EcoVetContext ecoVetContext)
        {
            this.ecoVetContext = ecoVetContext;
        }

        public async Task InserirVagaAsync(Vaga vaga)
        {
            ecoVetContext.Vagas.Add(vaga);

            await ecoVetContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<Vaga>> ObterVagasAsync()
        {
            return await ecoVetContext.Vagas.ToListAsync();
        }

        public async Task<IEnumerable<Vaga>> ObterVagasClinicaAsync(int idClinica)
        {
            return await ecoVetContext.Vagas.Where(clinica => clinica.IDClinicaVeterinaria == idClinica).ToListAsync();
        }
    }
}
