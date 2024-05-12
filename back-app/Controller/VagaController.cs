using Application;
using AutoMapper;
using back_app.Models;
using Domain.Dto;
using Domain.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace back_app.Controller
{
    [Route("[controller]")]
    public class VagaController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IVagaService vagaService;
        private readonly IClinicaVeterinariaService clinicaVeterinariaService;

        public VagaController(IMapper mapper, IVagaService vagaService, IClinicaVeterinariaService clinicaVeterinariaService)
        {
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));

            this.vagaService = vagaService ??
                        throw new ArgumentNullException(nameof(vagaService));

            this.clinicaVeterinariaService = clinicaVeterinariaService ??
                        throw new ArgumentNullException(nameof(clinicaVeterinariaService)); 
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
        public async Task<IActionResult> ObterVagas()
        {
            var retorno = await vagaService.ObterVagasAsync();

            return Ok(mapper.Map<IEnumerable<VagaModel>>(retorno));
        } 
        /// <summary>
        /// Obter vagas clinica.
        /// </summary>
        /// <response code="200">Lista de resultados.</response>
        /// <response code="400">
        ///     Dados inválidos
        /// </response>
        /// <response code="500">Erro interno.</response>
        [HttpGet("obterVagasClinica"), AllowAnonymous]
        [ProducesResponseType(typeof(IEnumerable<VagaModel>), 200)]
        [Authorize]
        public async Task<IActionResult> ObterVagasClinicaAsync()
        {
            var userId = User.FindFirst("IdUsuario")?.Value;

            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized(); 
            }

            var retorno = await vagaService.ObterVagasClinicaAsync(int.Parse(userId));

            return Ok(mapper.Map<IEnumerable<VagaModel>>(retorno));
        }

        /// <summary>
        /// Cadastro de vaga.
        /// </summary>
        /// <response code="200">Lista de resultados.</response>
        /// <response code="400">
        ///     Dados inválidos
        /// </response>
        /// <response code="500">Erro interno.</response>
        [HttpPost("cadastrarVaga")]
        [ProducesResponseType(typeof(IActionResult), 200)]
        public async Task<IActionResult> CadastrarVaga([FromBody] VagaModel vagaModel)
        {
            var vaga = mapper.Map<Vaga>(vagaModel);
            
            await vagaService.InserirVagaAsync(vaga);

            return Ok();
        }
    }
}
