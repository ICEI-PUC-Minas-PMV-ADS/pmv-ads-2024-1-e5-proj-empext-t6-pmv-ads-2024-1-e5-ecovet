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

        public async Task<ClinicaVeterinaria> LoginClinica(string email, string senha)
        {
            return await clinicaVeterinariaRepository.ObterClinicaLoginAsync(email, senha);
        }

        public async Task<ProfissionalVeterinario> LoginVeterinario(string email, string senha)
        {
            return await profissionalVeterinarioRepository.ObterVeterinarioLoginAsync(email, senha);
        }

    }

}
