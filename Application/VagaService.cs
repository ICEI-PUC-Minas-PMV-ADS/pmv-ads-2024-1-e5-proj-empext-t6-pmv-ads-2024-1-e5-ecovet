using Domain.Dto;
using Domain.Repositories;
using Domain.Services;

namespace Application
{
    public class VagaService : IVagaService
    {
        private readonly IVagaRepository vagaRepository;

        public VagaService(IVagaRepository vagaRepository)
        {
            this.vagaRepository = vagaRepository ??
                                 throw new ArgumentNullException(nameof(vagaRepository));
        }

        public async Task InserirVagaAsync(Vaga vaga)
        {
            await vagaRepository.InserirVagaAsync(vaga);
        }

        public async Task<IEnumerable<Vaga>> ObterVagasAsync()
        {
            return await vagaRepository.ObterVagasAsync();
        }
    }
}
