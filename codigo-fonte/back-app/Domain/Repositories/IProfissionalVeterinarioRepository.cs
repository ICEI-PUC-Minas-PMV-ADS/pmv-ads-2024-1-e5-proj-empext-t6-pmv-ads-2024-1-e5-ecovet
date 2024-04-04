using Domain.Dto;  

namespace Domain.Repositories
{
    public interface IProfissionalVeterinarioRepository
    {
        /// <summary>
        /// Obter a veterinário para login.
        /// </summary>
        Task<ProfissionalVeterinario> ObterVeterinarioLoginAsync(string email, string senha);
    }
}
