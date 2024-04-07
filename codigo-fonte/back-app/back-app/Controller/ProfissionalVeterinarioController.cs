using AutoMapper;
using back_app.Models;
using Domain.Dto;
using Domain.Services;
using Microsoft.AspNetCore.Authorization;
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

        /// <summary>
        /// Obter profissionais veterinários.
        /// </summary>
        /// <response code="200">Lista de resultados.</response>
        /// <response code="400">
        ///     Dados inválidos
        /// </response>
        /// <response code="500">Erro interno.</response>
        [HttpGet("obterVeterinarios")]
        [ProducesResponseType(typeof(IEnumerable<ProfissionalVeterinarioModel>), 200)]
        [Authorize]
        public async Task<IActionResult> ObterProfissionaisVeterinarios()
        {
            var result = await profissionalVeterinarioService.ObterProfissionaisVeterinarios();

            return Ok(mapper.Map<IEnumerable<ProfissionalVeterinarioModel>>(result));
        }


        /// <summary>
        /// Cadastro de profissional veterinário.
        /// </summary>
        /// <response code="200">Lista de resultados.</response>
        /// <response code="400">
        ///     Dados inválidos
        /// </response>
        /// <response code="500">Erro interno.</response>
        [HttpPost("cadastrarProfissionalVeterinario")]
        [ProducesResponseType(typeof(IActionResult), 200)]
        public async Task<IActionResult> CadastrarProfissionalVeterinario([FromBody] ProfissionalVeterinarioModel profissionalVeterinarioModel)
        {
            var veterinario = mapper.Map<ProfissionalVeterinario>(profissionalVeterinarioModel);

            await profissionalVeterinarioService.InserirProfissionalVeterinarioAsync(veterinario);

            return Ok();
        }


    }
}
