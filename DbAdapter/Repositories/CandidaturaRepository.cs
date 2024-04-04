using Domain.Repositories;

namespace DbAdapter.Repositories
{
    public class CandidaturaRepository : ICandidaturaRepository
    {
        private readonly EcoVetContext ecoVetContext;

        public CandidaturaRepository(EcoVetContext ecoVetContext)
        {
            this.ecoVetContext = ecoVetContext;
        }

    }
}
