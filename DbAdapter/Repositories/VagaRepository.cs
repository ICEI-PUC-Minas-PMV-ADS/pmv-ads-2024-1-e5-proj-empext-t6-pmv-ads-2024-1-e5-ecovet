using Domain.Dto;
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

        public async Task<ObterVagaComClinica> ObterVaga(int idVaga)
        {
            var vagaRetorno = await (from vaga in ecoVetContext.Vagas
                                         join clinica in ecoVetContext.ClinicasVeterinarias
                                         on vaga.IDClinicaVeterinaria equals clinica.IDClinica
                                         where vaga.IDVaga == idVaga
                                         select new ObterVagaComClinica
                                         {
                                             IDVaga = vaga.IDVaga,
                                             TituloVaga = vaga.TituloVaga,
                                             Descricao = vaga.Descricao,
                                             Requisitos = vaga.Requisitos,
                                             PeriodoDeDisponibilidade = vaga.PeriodoDeDisponibilidade,
                                             IDClinicaVeterinaria = vaga.IDClinicaVeterinaria,
                                             Experiencia = vaga.Experiencia,
                                             ClinicaVaga = clinica
                                         }).FirstOrDefaultAsync();

            return vagaRetorno;
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
                                              Experiencia = vaga.Experiencia,
                                              ClinicaVaga = clinica
                                          }).ToListAsync();

            return vagasComClinicas;
        }

        public async Task<IEnumerable<ObterVagaComClinica>> ObterVagasClinicaAsync(int idClinica)
        {
            var vagasComClinicas = await (from vaga in ecoVetContext.Vagas
                                          join clinica in ecoVetContext.ClinicasVeterinarias
                                          on vaga.IDClinicaVeterinaria equals clinica.IDClinica
                                          where vaga.IDClinicaVeterinaria == idClinica
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
    }
}
