using Domain.Dto;
using Domain.Repositories;
using Domain.Services;

namespace Application
{
    public class ClinicaVeterinariaService : IClinicaVeterinariaService
    {
        private readonly IClinicaVeterinariaRepository clinicaVeterinariaRepository;

        public ClinicaVeterinariaService(IClinicaVeterinariaRepository clinicaVeterinariaRepository)
        {
            this.clinicaVeterinariaRepository = clinicaVeterinariaRepository ??
                                 throw new ArgumentNullException(nameof(clinicaVeterinariaRepository));
        }

        public async Task InserirClinicaAsync(ClinicaVeterinaria clinicaVeterinaria)
        {
            await clinicaVeterinariaRepository.InserirClinicaAsync(clinicaVeterinaria);    
        }

        public async Task<IEnumerable<ClinicaVeterinaria>> ObterClinicasVeterinariasAsync()
        {
            return await clinicaVeterinariaRepository.ObterClinicasVeterinariasAsync();
        }

        public async Task<ClinicaVeterinaria> ObterClinicasVeterinariasPorIdAsync(int idClinicaVeterinaria)
        {
            return await clinicaVeterinariaRepository.ObterClinicasVeterinariasPorIdAsync(idClinicaVeterinaria);
        }
    }
}
