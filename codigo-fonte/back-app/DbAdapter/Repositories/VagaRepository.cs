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

        public async Task<IEnumerable<Vaga>> ObterVagasAsync()
        {
            return await ecoVetContext.Vagas.ToListAsync();
        }
    }
}
