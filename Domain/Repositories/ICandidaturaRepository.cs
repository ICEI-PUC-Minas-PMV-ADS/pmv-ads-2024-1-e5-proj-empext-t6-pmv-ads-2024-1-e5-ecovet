using Domain.Dto;  

namespace Domain.Repositories
{
    public interface ICandidaturaRepository
    {
        /// <summary>
        /// Cadastra uma nova candidatura.
        /// </summary>
        /// <param name="candidatura">Dados da candidatura.</param>
        Task InserirCandidaturaAsync(Candidatura candidatura);

        /// <summary>
        /// Obtém uma lista de todas as candidaturas.
        /// </summary>
        Task<IEnumerable<Candidatura>> ObterTodasCandidaturasAsync();

        /// <summary>
        /// Obtém uma candidatura pelo ID.
        /// </summary>
        /// <param name="idCandidatura">ID da candidatura.</param>
        Task<Candidatura> ObterCandidaturaPorIdAsync(int idCandidatura);

        /// <summary>
        /// Atualiza os dados de uma candidatura existente.
        /// </summary>
        /// <param name="candidatura">Candidatura com dados atualizados.</param>
        Task AtualizarCandidaturaAsync(Candidatura candidatura);

        /// <summary>
        /// Deleta uma candidatura existente.
        /// </summary>
        /// <param name="idCandidatura">ID da candidatura a ser deletada.</param>
        Task DeletarCandidaturaAsync(int idCandidatura);

        /// <summary>
        /// Obtém as candidaturas de um determinado profissional veterinário.
        /// </summary>
        /// <param name="idProfissionalVeterinario">ID do profissional veterinário.</param>
        Task<IEnumerable<Candidatura>> ObterCandidaturasPorVeterinarioAsync(int idProfissionalVeterinario);

        /// <summary>
        /// Obtém as candidaturas associadas a uma determinada vaga.
        /// </summary>
        /// <param name="idVaga">ID da vaga.</param>
        Task<IEnumerable<Candidatura>> ObterCandidaturasPorVagaAsync(int idVaga);

        /// <summary>
        /// Atualiza o status de uma candidatura.
        /// </summary>
        /// <param name="idCandidatura">ID da candidatura.</param>
        /// <param name="novoStatus">Novo status da candidatura.</param>
        Task AtualizarStatusCandidaturaAsync(int idCandidatura, string novoStatus);
    }
}
