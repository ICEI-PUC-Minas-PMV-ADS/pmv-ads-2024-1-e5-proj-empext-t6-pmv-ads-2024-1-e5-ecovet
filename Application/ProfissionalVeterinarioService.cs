using Domain.Dto;
using Domain.Repositories;
using Domain.Services;

namespace Application
{
    public class ProfissionalVeterinarioService : IProfissionalVeterinarioService
    {
        private readonly IProfissionalVeterinarioRepository profissionalVeterinarioRepository;

        public ProfissionalVeterinarioService(IProfissionalVeterinarioRepository profissionalVeterinarioRepository)
        {
            this.profissionalVeterinarioRepository = profissionalVeterinarioRepository ??
                                 throw new ArgumentNullException(nameof(profissionalVeterinarioRepository));
        }

        public async Task InserirProfissionalVeterinarioAsync(ProfissionalVeterinario profissionalVeterinario)
        {
            await profissionalVeterinarioRepository.InserirProfissionalVeterinarioAsync(profissionalVeterinario);
        }

        public async Task<IEnumerable<ProfissionalVeterinario>> ObterProfissionaisVeterinarios()
        {
            return await profissionalVeterinarioRepository.ObterProfissionaisVeterinarios();
        }

        public async Task<ProfissionalVeterinario> ObterProfissionalVeterinarioPorId(int id)
        {
            return await profissionalVeterinarioRepository.ObterProfissionalVeterinarioPorId(id);
        }

        public async Task AtualizarProfissionalVeterinarioAsync(ProfissionalVeterinario profissionalVeterinario)
        {
            await profissionalVeterinarioRepository.AtualizarProfissionalVeterinarioAsync(profissionalVeterinario);
        }

        public async Task ExcluirProfissionalVeterinarioAsync(int id)
        {
            await profissionalVeterinarioRepository.ExcluirProfissionalVeterinarioAsync(id);
        }
    }
}
