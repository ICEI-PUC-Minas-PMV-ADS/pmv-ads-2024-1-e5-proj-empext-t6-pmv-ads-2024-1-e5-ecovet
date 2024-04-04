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

        public async Task<IEnumerable<ClinicaVeterinaria>> ObterClinicasVeterinariasAsync()
        {
            return await clinicaVeterinariaRepository.ObterClinicasVeterinariasAsync();
        }
    }
}
