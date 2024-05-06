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
        
        /// <summary>
        /// Obter vagas postadas pela clínica.
        /// </summary>
        /// <returns>
        ///      Obter as vagas que foram postadas pela clínica.
        /// </returns>
        /// <param>
        /// Email clinica
        /// </param>
        Task<IEnumerable<Vaga>> ObterVagasClinicaAsync(int idClinica);

        #endregion

        /// <sumary>
        /// Cadastrar vaga. 
        /// </sumary>
        Task InserirVagaAsync(Vaga vaga);
    }
}
