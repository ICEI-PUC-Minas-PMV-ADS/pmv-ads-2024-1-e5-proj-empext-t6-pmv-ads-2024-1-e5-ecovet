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


        /// <summary>
        /// Inserir profissional veterinário.
        /// </summary>
        Task InserirProfissionalVeterinarioAsync(ProfissionalVeterinario profissionalVeterinario);
    }
}
