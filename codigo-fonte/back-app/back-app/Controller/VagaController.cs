﻿using AutoMapper;
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
        public async Task<IActionResult> ObterVagas()
        {
            var retorno = await vagaService.ObterVagasAsync();

            return Ok(mapper.Map<IEnumerable<ObterVagaComClinicaModel>>(retorno));
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
        public async Task<IActionResult> ObterVagasClinicaAsync()
        {
            var userId = User.FindFirst("IdUsuario")?.Value;

            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized(); 
            }

            var retorno = await vagaService.ObterVagasClinicaAsync(int.Parse(userId));

            return Ok(mapper.Map<IEnumerable<ObterVagaComClinicaModel>>(retorno));
        }        
        
        /// <summary>
        /// Obter vaga.
        /// </summary>
        /// <response code="200">Lista de resultados.</response>
        /// <response code="400">
        ///     Dados inválidos
        /// </response>
        /// <response code="500">Erro interno.</response>
        [HttpGet("{idVaga}"), AllowAnonymous]
        [ProducesResponseType(typeof(IEnumerable<VagaModel>), 200)]
        public async Task<IActionResult> ObterVagaAsync(int idVaga)
        {
            var retorno = await vagaService.ObterVaga(idVaga);

            return Ok(mapper.Map<ObterVagaComClinicaModel>(retorno));
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
        [Authorize(Policy = "ClinicaOnly")]
        [ProducesResponseType(typeof(IActionResult), 200)]
        public async Task<IActionResult> CadastrarVaga([FromBody] VagaModel vagaModel)
        {
            vagaModel.StatusVaga = StatusVagaModel.Aberto;

            var vaga = mapper.Map<Vaga>(vagaModel);

            vaga.IDClinicaVeterinaria = int.Parse(User?.FindFirst("IdUsuario")?.Value);

            await vagaService.InserirVagaAsync(vaga);

            return Ok();
        }   
        
        /// <summary>
        /// Deletar vaga.
        /// </summary>
        /// <response code="200">Lista de resultados.</response>
        /// <response code="400">
        ///     Dados inválidos
        /// </response>
        /// <response code="500">Erro interno.</response>
        [HttpDelete("{idVaga}")]
        [Authorize(Policy = "ClinicaOnly")]
        [ProducesResponseType(typeof(IActionResult), 200)]
        public async Task<IActionResult> DeletarVaga(int idVaga)
        {
            await vagaService.DeletarVagaAsync(idVaga);

            return Ok();
        }
    }
}
