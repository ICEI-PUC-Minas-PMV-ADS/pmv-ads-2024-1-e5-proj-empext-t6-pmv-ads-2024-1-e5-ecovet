using Domain.Dto;
using Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace DbAdapter.Repositories
{
    public class ProfissionalVeterinarioRepository : IProfissionalVeterinarioRepository
    {
        private readonly EcoVetContext ecoVetContext;

        public ProfissionalVeterinarioRepository(EcoVetContext ecoVetContext)
        {
            this.ecoVetContext = ecoVetContext;
        }

        public async Task InserirProfissionalVeterinarioAsync(ProfissionalVeterinario profissionalVeterinario)
        {
            ecoVetContext.ProfissionaisVeterinarios.Add(profissionalVeterinario);
            await ecoVetContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<ProfissionalVeterinario>> ObterProfissionaisVeterinarios()
        {
            return await ecoVetContext.ProfissionaisVeterinarios.ToListAsync();
        }

        public async Task<ProfissionalVeterinario> ObterVeterinarioLoginAsync(string email, string senha)
        {
            return await ecoVetContext.ProfissionaisVeterinarios
                        .FirstOrDefaultAsync(v => v.Email == email && v.Senha == senha);
        }

        public async Task<ProfissionalVeterinario> ObterProfissionalVeterinarioPorId(int id)
        {
            return await ecoVetContext.ProfissionaisVeterinarios.FindAsync(id);
        }

        public async Task AtualizarProfissionalVeterinarioAsync(ProfissionalVeterinario profissionalVeterinario)
        {
            ecoVetContext.ProfissionaisVeterinarios.Update(profissionalVeterinario);
            await ecoVetContext.SaveChangesAsync();
        }

        public async Task ExcluirProfissionalVeterinarioAsync(int id)
        {
            var profissionalVeterinario = await ObterProfissionalVeterinarioPorId(id);
            if (profissionalVeterinario != null)
            {
                ecoVetContext.ProfissionaisVeterinarios.Remove(profissionalVeterinario);
                await ecoVetContext.SaveChangesAsync();
            }
        }
    }
}
