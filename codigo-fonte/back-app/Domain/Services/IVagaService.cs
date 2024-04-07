using Domain.Dto;

namespace Domain.Services
{
    public interface IVagaService
    {
        #region Obter

        /// <summary>
        /// Processo de obter vagas.
        /// </summary>
        /// <returns>
        ///      Lista de vagas encontrados conforme critério de pesquisa.
        /// </returns>
        Task<IEnumerable<Vaga>> ObterVagasAsync();

        #endregion

        /// <sumary>
        /// Cadastrar vaga. 
        /// </sumary>
        Task InserirVagaAsync(Vaga vaga);
    }
}
