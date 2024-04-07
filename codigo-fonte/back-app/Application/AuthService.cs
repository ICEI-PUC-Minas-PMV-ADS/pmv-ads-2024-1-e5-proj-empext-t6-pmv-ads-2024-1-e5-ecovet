using Domain.Dto;
using Domain.Repositories;
using Domain.Services;

namespace Application
{
    public class AuthService : IAuthService
    {
        private readonly IClinicaVeterinariaRepository clinicaVeterinariaRepository;

        private readonly IProfissionalVeterinarioRepository profissionalVeterinarioRepository;


        public AuthService(IClinicaVeterinariaRepository clinicaVeterinariaRepository, 
            IProfissionalVeterinarioRepository profissionalVeterinarioRepository)
        {
            this.clinicaVeterinariaRepository = clinicaVeterinariaRepository ??
                                 throw new ArgumentNullException(nameof(clinicaVeterinariaRepository));

            this.profissionalVeterinarioRepository = profissionalVeterinarioRepository ??
                                 throw new ArgumentNullException(nameof(profissionalVeterinarioRepository));
        }

        public async Task<bool> LoginClinica(string email, string senha)
        {
            var clinica = await clinicaVeterinariaRepository.ObterClinicaLoginAsync(email, senha);

            if (clinica == null)
                return false;
            else
                return true;

        }

        public async Task<bool> LoginVeterinario(string email, string senha)
        {
            var veterinario = await profissionalVeterinarioRepository.ObterVeterinarioLoginAsync(email, senha);

            if (veterinario == null)
                return false;
            else
                return true;
        }

    }

}
