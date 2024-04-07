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
        [HttpGet("obterClincasVeterinarias")]
        [ProducesResponseType(typeof(IEnumerable<ClinicaVeterinariaModel>), 200)]
        //[Authorize]
        public async Task<IActionResult> ObterClinicasVeterinarias()
        {
            var result = await clinicaVeterinariaService.ObterClinicasVeterinariasAsync();

            return Ok(mapper.Map<IEnumerable<ClinicaVeterinariaModel>>(result));
        }       
        
        /// <summary>
        /// Cadastro de cliníca veterinaria.
        /// </summary>
        /// <response code="200">Lista de resultados.</response>
        /// <response code="400">
        ///     Dados inválidos
        /// </response>
        /// <response code="500">Erro interno.</response>
        [HttpPost("cadastrarClinicaVeterinaria")]
        [ProducesResponseType(typeof(IActionResult), 200)]
        public async Task<IActionResult> CadastrarClinicaVeterinaria(ClinicaVeterinariaModel clinicaVeterinariaModel)
        {
            var clinica = mapper.Map<ClinicaVeterinaria>(clinicaVeterinariaModel);

            await clinicaVeterinariaService.InserirClinicaAsync(clinica);

            return Ok();
        }
    }
}
