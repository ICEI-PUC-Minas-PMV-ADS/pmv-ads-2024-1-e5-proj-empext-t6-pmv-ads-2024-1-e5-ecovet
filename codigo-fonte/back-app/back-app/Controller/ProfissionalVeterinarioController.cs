using AutoMapper;
using Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace back_app.Controller
{
    [Route("[controller]")]
    public class ProfissionalVeterinarioController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IProfissionalVeterinarioService profissionalVeterinarioService;

        public ProfissionalVeterinarioController(IMapper mapper, IProfissionalVeterinarioService profissionalVeterinarioService)
        {
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            this.profissionalVeterinarioService = profissionalVeterinarioService ??
                        throw new ArgumentNullException(nameof(profissionalVeterinarioService));
        }
    }
}
