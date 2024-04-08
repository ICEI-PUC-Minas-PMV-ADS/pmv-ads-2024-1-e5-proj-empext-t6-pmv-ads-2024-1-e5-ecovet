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
        /// Obtem as clinicas veterinárias por id.
        /// </summary>
        Task<ClinicaVeterinaria> ObterClinicasVeterinariasPorIdAsync(int idClinicaVeterinaria);    
        
        /// <summary>
        /// Obter a clinica para login.
        /// </summary>
        Task<ClinicaVeterinaria> ObterClinicaLoginAsync(string email, string senha);

        /// <summary>
        /// Inserir clinica veterinária.
        /// </summary>
        Task InserirClinicaAsync(ClinicaVeterinaria clinicaVeterinaria);
    }
}
