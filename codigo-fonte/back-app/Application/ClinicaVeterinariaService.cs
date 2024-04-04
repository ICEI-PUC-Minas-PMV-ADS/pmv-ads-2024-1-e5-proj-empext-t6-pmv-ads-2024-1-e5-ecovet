using Domain.Dto;
using Domain.Repositories;
using Domain.Services;

namespace Application
{
    public class ClinicaVeterinariaService : IClinicaVeterinariaService
    {
        private readonly IClinicaVeterinariaReadOnly clinicaVeterinariaReadOnly;

        public ClinicaVeterinariaService(IClinicaVeterinariaReadOnly clinicaVeterinariaReadOnly)
        {
            this.clinicaVeterinariaReadOnly = clinicaVeterinariaReadOnly ??
                                 throw new ArgumentNullException(nameof(clinicaVeterinariaReadOnly));
        }

        public async Task<IEnumerable<ClinicaVeterinaria>> ObterClinicasVeterinariasAsync()
        {
            return await clinicaVeterinariaReadOnly.ObterClinicasVeterinariasAsync();
        }
    }
}
