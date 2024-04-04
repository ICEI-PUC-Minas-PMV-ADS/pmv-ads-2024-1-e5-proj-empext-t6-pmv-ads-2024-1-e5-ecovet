using Domain.Dto;  

namespace Domain.Repositories
{
    public interface IClinicaVeterinariaRepository
    {
        /// <summary>
        /// Obtem as clinicas veterinárias.
        /// </summary>
        Task<IEnumerable<ClinicaVeterinaria>> ObterClinicasVeterinariasAsync();    
        
        /// <summary>
        /// Obter a clinica para login.
        /// </summary>
        Task<ClinicaVeterinaria> ObterClinicaLoginAsync(string email, string senha);
    }
}
