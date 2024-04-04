using Domain.Dto;

namespace Domain.Services
{
    public interface ILoginService
    {

        /// <summary>
        /// Processo de login clinica.
        /// </summary>
        /// <returns>
        ///      Booleano usuario encontrado.
        /// </returns>
        Task<bool> LoginClinica(string email, string senha);

        /// <summary>
        /// Processo de login veterinário.
        /// </summary>
        /// <returns>
        ///      Booleano usuario encontrado.        
        /// </returns>
        Task<bool> LoginVeterinario(string email, string senha);
    }
}
