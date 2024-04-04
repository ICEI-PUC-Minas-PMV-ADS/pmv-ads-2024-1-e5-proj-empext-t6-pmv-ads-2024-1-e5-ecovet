using Domain.Repositories;
using Domain.Services;

namespace Application
{
    public class CandidaturaService : ICandidaturaService
    {
        private readonly ICandidaturaRepository candidaturaRepository;

        public CandidaturaService(ICandidaturaRepository candidaturaRepository)
        {
            this.candidaturaRepository = candidaturaRepository ??
                                 throw new ArgumentNullException(nameof(candidaturaRepository));
        }
    }
}
