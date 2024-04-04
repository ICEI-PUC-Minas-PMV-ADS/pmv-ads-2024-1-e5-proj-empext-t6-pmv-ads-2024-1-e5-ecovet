using Domain.Dto;  

namespace Domain.Repositories
{
    public interface IClinicaVeterinariaRepository
    {
        /// <summary>
        /// Obtem as clinicas veterinárias.
        /// </summary>
        Task<IEnumerable<ClinicaVeterinaria>> ObterClinicasVeterinariasAsync();
    }
}
