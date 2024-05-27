﻿using Domain.Dto;
using Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace DbAdapter.Repositories
{
    public class VagaRepository : IVagaRepository
    {
        private readonly EcoVetContext ecoVetContext;

        public VagaRepository(EcoVetContext ecoVetContext)
        {
            this.ecoVetContext = ecoVetContext;
        }

        public async Task DeletarVagaAsync(int idVaga)
        {
            var vaga = await ecoVetContext.Vagas.FirstOrDefaultAsync(v => v.IDVaga == idVaga);

            if (vaga != null)
            {
                ecoVetContext.Vagas.Remove(vaga);
                await ecoVetContext.SaveChangesAsync();
            }
            else
            {
                throw new Exception("Vaga não encontrada.");
            }

        }

        public async Task InserirVagaAsync(Vaga vaga)
        {
            ecoVetContext.Vagas.Add(vaga);

            await ecoVetContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<ObterVagaComClinica>> ObterVagasAsync()
        {
            var vagasComClinicas = await (from vaga in ecoVetContext.Vagas
                                          join clinica in ecoVetContext.ClinicasVeterinarias
                                          on vaga.IDClinicaVeterinaria equals clinica.IDClinica
                                          select new ObterVagaComClinica
                                          {
                                              IDVaga = vaga.IDVaga,
                                              TituloVaga = vaga.TituloVaga,
                                              Descricao = vaga.Descricao,
                                              Requisitos = vaga.Requisitos,
                                              PeriodoDeDisponibilidade = vaga.PeriodoDeDisponibilidade,
                                              IDClinicaVeterinaria = vaga.IDClinicaVeterinaria,
                                              ClinicaVaga = clinica
                                          }).ToListAsync();

            return vagasComClinicas;
        }

        public async Task<IEnumerable<Vaga>> ObterVagasClinicaAsync(int idClinica)
        {
            return await ecoVetContext.Vagas.Where(clinica => clinica.IDClinicaVeterinaria == idClinica).ToListAsync();
        }
    }
}
