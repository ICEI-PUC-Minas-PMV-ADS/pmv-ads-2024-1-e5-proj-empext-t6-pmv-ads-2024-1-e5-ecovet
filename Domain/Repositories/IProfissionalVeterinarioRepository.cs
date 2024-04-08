using Domain.Dto;  

namespace Domain.Repositories
{
    public interface IProfissionalVeterinarioRepository
    {
        /// <summary>
        /// Obter a veterinário para login.
        /// </summary>
        Task<ProfissionalVeterinario> ObterVeterinarioLoginAsync(string email, string senha);

        /// <summary>
        /// Inserir profissional veterinário.
        /// </summary>
        Task InserirProfissionalVeterinarioAsync(ProfissionalVeterinario profissionalVeterinario);

        /// <summary>
        /// Processo de obter profissionais veterinários de acordo com filtros.
        /// </summary>
        /// <returns>
        ///      Lista de profissionais veterinarios encontrados conforme critério de pesquisa.
        /// </returns>
        Task<IEnumerable<ProfissionalVeterinario>> ObterProfissionaisVeterinarios();
    }
}
