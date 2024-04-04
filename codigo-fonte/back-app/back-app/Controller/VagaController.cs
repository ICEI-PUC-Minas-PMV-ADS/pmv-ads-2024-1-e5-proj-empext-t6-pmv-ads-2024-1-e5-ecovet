using AutoMapper;
using back_app.Models;
using Domain.Dto;
using Domain.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace back_app.Controller
{
    [Route("[controller]")]
    public class VagaController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IVagaService vagaService;

        public VagaController(IMapper mapper, IVagaService vagaService)
        {
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            this.vagaService = vagaService ??
                        throw new ArgumentNullException(nameof(vagaService));
        }

        /// <summary>
        /// Obter vagas.
        /// </summary>
        /// <response code="200">Lista de resultados.</response>
        /// <response code="400">
        ///     Dados inválidos
        /// </response>
        /// <response code="500">Erro interno.</response>
        [HttpGet("obterVagas"), AllowAnonymous]
        [ProducesResponseType(typeof(IEnumerable<VagaModel>), 200)]
        [Authorize]
        public async Task<IActionResult> ObterClinicasVeterinarias()
        {
            var result = await vagaService.ObterVagasAsync();

            return Ok(mapper.Map<IEnumerable<ClinicaVeterinariaModel>>(result));
        }
    }
}
