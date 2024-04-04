using AutoMapper;
using back_app.Models;
using Domain.Dto;
using Domain.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace back_app.Controller
{
    [Route("[controller]")]
    public class ClinicaVeterinariaController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IClinicaVeterinariaService clinicaVeterinariaService; 

        public ClinicaVeterinariaController(IMapper mapper, IClinicaVeterinariaService clinicaVeterinariaService)
        {
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            this.clinicaVeterinariaService = clinicaVeterinariaService ??
                        throw new ArgumentNullException(nameof(clinicaVeterinariaService));
        }

        /// <summary>
        /// Obter clínicas veterinarias.
        /// </summary>
        /// <response code="200">Lista de resultados.</response>
        /// <response code="400">
        ///     Dados inválidos
        /// </response>
        /// <response code="500">Erro interno.</response>
        [HttpGet("obterVeterinarios"), AllowAnonymous]
        [ProducesResponseType(typeof(IEnumerable<ClinicaVeterinariaModel>), 200)]
        [Authorize]
        public async Task<IActionResult> ObterClinicasVeterinarias()
        {
            var result = await clinicaVeterinariaService.ObterClinicasVeterinariasAsync();

            return Ok(mapper.Map<IEnumerable<ClinicaVeterinariaModel>>(result));
        }
    }
}
