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

    }
}
