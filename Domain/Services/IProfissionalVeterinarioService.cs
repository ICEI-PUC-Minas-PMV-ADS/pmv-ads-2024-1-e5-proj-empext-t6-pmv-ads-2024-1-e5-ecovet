using Domain.Dto;

namespace Domain.Services
{
    public interface IProfissionalVeterinarioService
    {
        #region Obter
        /// <summary>
        /// Processo de obter profissionais veterinários de acordo com filtros.
        /// </summary>
        /// <returns>
        ///      Lista de profissionais veterinarios encontrados conforme critério de pesquisa.
        /// </returns>
        Task<IEnumerable<ProfissionalVeterinario>> ObterProfissionaisVeterinarios();
        #endregion

        #region ObterPorId
        /// <summary>
        /// Obter um profissional veterinário por ID.
        /// </summary>
        /// <param name="id">ID do profissional veterinário.</param>
        /// <returns>Profissional veterinário encontrado.</returns>
        Task<ProfissionalVeterinario> ObterProfissionalVeterinarioPorId(int id);
        #endregion

        #region Inserir
        /// <summary>
        /// Inserir profissional veterinário.
        /// </summary>
        Task InserirProfissionalVeterinarioAsync(ProfissionalVeterinario profissionalVeterinario);
        #endregion

        #region Atualizar
        /// <summary>
        /// Atualizar profissional veterinário.
        /// </summary>
        Task AtualizarProfissionalVeterinarioAsync(ProfissionalVeterinario profissionalVeterinario);
        #endregion

        #region Excluir
        /// <summary>
        /// Excluir profissional veterinário.
        /// </summary>
        Task ExcluirProfissionalVeterinarioAsync(int id);
        #endregion
    }
}
