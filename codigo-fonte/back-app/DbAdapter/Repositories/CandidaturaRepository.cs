using Domain.Dto;
using Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DbAdapter.Repositories
{
    public class CandidaturaRepository : ICandidaturaRepository
    {
        private readonly EcoVetContext ecoVetContext;

        public CandidaturaRepository(EcoVetContext ecoVetContext)
        {
            this.ecoVetContext = ecoVetContext;
        }

        public async Task InserirCandidaturaAsync(Candidatura candidatura)
        {
            ecoVetContext.Candidaturas.Add(candidatura);
            await ecoVetContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<Candidatura>> ObterTodasCandidaturasAsync()
        {
            return await ecoVetContext.Candidaturas.ToListAsync();
        }

        public async Task<Candidatura> ObterCandidaturaPorIdAsync(int idCandidatura)
        {
            return await ecoVetContext.Candidaturas.FirstOrDefaultAsync(c => c.IDCandidatura == idCandidatura);
        }

        public async Task<IEnumerable<Candidatura>> ObterCandidaturasPorVeterinarioAsync(int idProfissionalVeterinario)
        {
            return await ecoVetContext.Candidaturas
                                      .Where(c => c.IdProfissionalVeterinario == idProfissionalVeterinario)
                                      .ToListAsync();
        }

        public async Task<IEnumerable<ObterCandidaturasComVagaEVeterinario>> ObterCandidaturasPorVagaAsync(int idVaga)
        {
            var result = await (from c in ecoVetContext.Candidaturas
                                join p in ecoVetContext.ProfissionaisVeterinarios on c.IdProfissionalVeterinario equals p.IDProfissional
                                join v in ecoVetContext.Vagas on c.IdVaga equals v.IDVaga
                                join clinica in ecoVetContext.ClinicasVeterinarias on v.IDClinicaVeterinaria equals clinica.IDClinica
                                where c.IdVaga == idVaga
                                select new ObterCandidaturasComVagaEVeterinario
                                {
                                    Candidatura = c,
                                    ProfissionalVeterinario = p,
                                    Vaga = v,
                                    ClinicaVeterinaria = clinica
                                }).ToListAsync();

            return result;
        }

        public async Task AtualizarCandidaturaAsync(Candidatura candidatura)
        {
            ecoVetContext.Candidaturas.Update(candidatura);
            await ecoVetContext.SaveChangesAsync();
        }

        public async Task DeletarCandidaturaAsync(int idCandidatura)
        {
            var candidatura = await ecoVetContext.Candidaturas.FirstOrDefaultAsync(c => c.IDCandidatura == idCandidatura);
            if (candidatura != null)
            {
                ecoVetContext.Candidaturas.Remove(candidatura);
                await ecoVetContext.SaveChangesAsync();
            }
            else
            {
                throw new Exception("Candidatura não encontrada.");
            }
        }

        public async Task AtualizarStatusCandidaturaAsync(int idCandidatura, string novoStatus)
        {
            var candidatura = await ecoVetContext.Candidaturas.FirstOrDefaultAsync(c => c.IDCandidatura == idCandidatura);
            if (candidatura != null)
            {
                candidatura.Status = novoStatus;
                ecoVetContext.Candidaturas.Update(candidatura);
                await ecoVetContext.SaveChangesAsync();
            }
            else
            {
                throw new Exception("Candidatura não encontrada para atualização de status.");
            }
        }
    }
}
