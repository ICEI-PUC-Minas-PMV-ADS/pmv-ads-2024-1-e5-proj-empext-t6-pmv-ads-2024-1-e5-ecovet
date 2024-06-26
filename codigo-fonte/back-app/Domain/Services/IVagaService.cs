﻿using Domain.Dto;

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
        Task<IEnumerable<ObterVagaComClinica>> ObterVagasAsync();     
        
        /// <summary>
        /// Obter vagas postadas pela clínica.
        /// </summary>
        /// <returns>
        ///      Obter as vagas que foram postadas pela clínica.
        /// </returns>
        /// <param>
        /// Email clinica
        /// </param>
        Task<IEnumerable<ObterVagaComClinica>> ObterVagasClinicaAsync(int idClinica);

        /// <summary>
        /// Obter vaga.
        /// </summary>
        Task<ObterVagaComClinica> ObterVaga(int idVaga);
        #endregion

        /// <sumary>
        /// Cadastrar vaga. 
        /// </sumary>
        Task InserirVagaAsync(Vaga vaga);

        /// <summary>
        /// Deletar vaga.
        /// </summary>
        /// <param>
        /// id da vaga
        /// </param>
        Task DeletarVagaAsync(int idVaga);

    }
}
