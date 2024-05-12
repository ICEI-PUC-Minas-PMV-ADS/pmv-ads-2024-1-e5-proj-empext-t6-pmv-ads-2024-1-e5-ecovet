using Domain.Dto;

namespace Domain.Services
{
    public interface IAuthService
    {

        /// <summary>
        /// Processo de login clinica.
        /// </summary>
        /// <returns>
        ///      Booleano usuario encontrado.
        /// </returns>
        Task<ClinicaVeterinaria> LoginClinica(string email, string senha);

        /// <summary>
        /// Processo de login veterinário.
        /// </summary>
        /// <returns>
        ///      Booleano usuario encontrado.        
        /// </returns>
        Task<ProfissionalVeterinario> LoginVeterinario(string email, string senha);
    }
}
