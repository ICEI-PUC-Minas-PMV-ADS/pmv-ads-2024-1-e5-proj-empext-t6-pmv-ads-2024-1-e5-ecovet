﻿using Domain.Dto;  

namespace Domain.Repositories
{
    public interface IVagaRepository
    {
        /// <summary>
        /// Obtem as vagas.
        /// </summary>
        Task<IEnumerable<ObterVagaComClinica>> ObterVagasAsync();

        /// <sumary>
        /// Cadastrar vaga. 
        /// </sumary>
        Task InserirVagaAsync(Vaga vaga);

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

        /// <summary>
        /// Deletar vaga.
        /// </summary>
        /// <param>
        /// id da vaga
        /// </param>
        Task DeletarVagaAsync(int idVaga);
    }
}
