using Domain.Dto;
using Domain.Repositories;
using Domain.Services;

namespace Application
{
    public class VagaService : IVagaService
    {
        private readonly IVagaRepository vagaRepository;
        private readonly IClinicaVeterinariaRepository clinicaVeterinariaRepository;

        public VagaService(IVagaRepository vagaRepository,
            IClinicaVeterinariaRepository clinicaVeterinariaRepository)
        {
            this.vagaRepository = vagaRepository ??
                                 throw new ArgumentNullException(nameof(vagaRepository));
            this.clinicaVeterinariaRepository = clinicaVeterinariaRepository  ??
                                 throw new ArgumentNullException(nameof(clinicaVeterinariaRepository)); ;
        }

        public async Task InserirVagaAsync(Vaga vaga)
        {
            await vagaRepository.InserirVagaAsync(vaga);
        }

        public async Task<IEnumerable<Vaga>> ObterVagasAsync()
        {
            return await vagaRepository.ObterVagasAsync();
        }

        public async Task<IEnumerable<Vaga>> ObterVagasClinicaAsync(int idClinica)
        {
            return await vagaRepository.ObterVagasClinicaAsync(idClinica);
        }
    }
}
