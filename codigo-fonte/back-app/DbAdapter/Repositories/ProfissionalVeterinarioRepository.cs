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
    }
}
