using Domain.Dto;
using Domain.Repositories;
using Domain.Services;

namespace Application
{
    public class CandidaturaService : ICandidaturaService
    {
        private readonly ICandidaturaRepository candidaturaRepository;

        public CandidaturaService(ICandidaturaRepository candidaturaRepository)
        {
            this.candidaturaRepository = candidaturaRepository ??
                                         throw new ArgumentNullException(nameof(candidaturaRepository));
        }

        public async Task InserirCandidaturaAsync(Candidatura candidatura)
        {
            if (candidatura == null)
                throw new ArgumentNullException(nameof(candidatura));

            await candidaturaRepository.InserirCandidaturaAsync(candidatura);
        }

        public async Task<IEnumerable<Candidatura>> ObterTodasCandidaturasAsync()
        {
            return await candidaturaRepository.ObterTodasCandidaturasAsync();
        }

        public async Task<Candidatura> ObterCandidaturaPorIdAsync(int idCandidatura)
        {
            var candidatura = await candidaturaRepository.ObterCandidaturaPorIdAsync(idCandidatura);
            if (candidatura == null)
                throw new KeyNotFoundException($"Candidatura com ID {idCandidatura} não encontrada.");

            return candidatura;
        }

        public async Task<IEnumerable<Candidatura>> ObterCandidaturasPorVeterinarioAsync(int idProfissionalVeterinario)
        {
            return await candidaturaRepository.ObterCandidaturasPorVeterinarioAsync(idProfissionalVeterinario);
        }

        public async Task<IEnumerable<Candidatura>> ObterCandidaturasPorVagaAsync(int idVaga)
        {
            return await candidaturaRepository.ObterCandidaturasPorVagaAsync(idVaga);
        }

        public async Task AtualizarCandidaturaAsync(Candidatura candidatura)
        {
            if (candidatura == null)
                throw new ArgumentNullException(nameof(candidatura));

            await candidaturaRepository.AtualizarCandidaturaAsync(candidatura);
        }

        public async Task DeletarCandidaturaAsync(int idCandidatura)
        {
            var candidatura = await candidaturaRepository.ObterCandidaturaPorIdAsync(idCandidatura);
            if (candidatura == null)
                throw new KeyNotFoundException($"Candidatura com ID {idCandidatura} não encontrada.");

            await candidaturaRepository.DeletarCandidaturaAsync(idCandidatura);
        }

        public async Task AtualizarStatusCandidaturaAsync(int idCandidatura, string novoStatus)
        {
            if (string.IsNullOrEmpty(novoStatus))
                throw new ArgumentException("Novo status não pode ser vazio.", nameof(novoStatus));

            await candidaturaRepository.AtualizarStatusCandidaturaAsync(idCandidatura, novoStatus);
        }
    }
}
