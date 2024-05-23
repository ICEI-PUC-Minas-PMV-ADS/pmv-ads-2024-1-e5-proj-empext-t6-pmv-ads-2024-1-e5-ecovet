using Application;
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
        /// Obter profissional veterinário por ID.
        /// </summary>
        /// <response code="200">Lista de resultados.</response>
        /// <response code="400">
        ///     Dados inválidos
        /// </response>
        /// <param name="id">ID da profissional veterinário.</param>
        /// <response code="200">profissional veterinário encontrada.</response>
        /// <response code="404">profissional veterinário não encontrada.</response>
        /// <response code="500">Erro interno.</response>
        [HttpGet("obterProfissionalVeterinarioPorId/{id}")]
        [ProducesResponseType(typeof(ClinicaVeterinariaModel), 200)]
        [ProducesResponseType(typeof(IActionResult), 404)]
        [ProducesResponseType(typeof(IActionResult), 500)]
        public async Task<IActionResult> ObterProfissionalVeterinarioPorId(int id)
        {
            var profissionalVeterinario = await profissionalVeterinarioService.ObterProfissionalVeterinarioPorId(id);

            if (profissionalVeterinario == null)
            {
                return NotFound("Profissional veterinário não encontrada.");
            }
            return Ok(mapper.Map<ProfissionalVeterinarioModel>(profissionalVeterinario));
        }
        /// <summary>
        /// Cadastro de profissional veterinário.
        /// </summary>
        /// <response code="200">Profissional veterinário cadastrado com sucesso.</response>
        /// <response code="400">Dados inválidos.</response>
        /// <response code="500">Erro interno.</response>
        [HttpPost("cadastrarProfissionalVeterinario")]
        [ProducesResponseType(typeof(IActionResult), 200)]
        [ProducesResponseType(typeof(IActionResult), 400)]
        [ProducesResponseType(typeof(IActionResult), 500)]
        public async Task<IActionResult> CadastrarProfissionalVeterinario([FromBody] ProfissionalVeterinarioModel profissionalVeterinarioModel)
        {
            if (profissionalVeterinarioModel == null)
            {
                return BadRequest("Dados inválidos.");
            }

            var veterinario = mapper.Map<ProfissionalVeterinario>(profissionalVeterinarioModel);

            try
            {
                await profissionalVeterinarioService.InserirProfissionalVeterinarioAsync(veterinario);
                return Ok("Profissional veterinário cadastrado com sucesso.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }

        /// <summary>
        /// Atualizar informações de um profissional veterinário.
        /// </summary>
        /// <param name="id">Id do profissional veterinário.</param>
        /// <param name="profissionalVeterinarioModel">Dados do profissional veterinário a serem atualizados.</param>
        /// <response code="200">Profissional veterinário atualizado com sucesso.</response>
        /// <response code="400">Dados inválidos.</response>
        /// <response code="404">Profissional veterinário não encontrado.</response>
        /// <response code="500">Erro interno.</response>
        [HttpPut("atualizarProfissionalVeterinario/{id}")]
        [ProducesResponseType(typeof(IActionResult), 200)]
        [ProducesResponseType(typeof(IActionResult), 400)]
        [ProducesResponseType(typeof(IActionResult), 404)]
        [ProducesResponseType(typeof(IActionResult), 500)]
        public async Task<IActionResult> AtualizarProfissionalVeterinario(int id, [FromBody] ProfissionalVeterinarioModel profissionalVeterinarioModel)
        {
            if (profissionalVeterinarioModel == null)
            {
                return BadRequest("Dados inválidos.");
            }

            var veterinarioExistente = await profissionalVeterinarioService.ObterProfissionalVeterinarioPorId(id);
            if (veterinarioExistente == null)
            {
                return NotFound("Profissional veterinário não encontrado.");
            }

            var veterinarioAtualizado = mapper.Map(profissionalVeterinarioModel, veterinarioExistente);

            try
            {
                await profissionalVeterinarioService.AtualizarProfissionalVeterinarioAsync(veterinarioAtualizado);
                return Ok("Profissional veterinário atualizado com sucesso.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }

        /// <summary>
        /// Excluir um profissional veterinário.
        /// </summary>
        /// <param name="id">Id do profissional veterinário a ser excluído.</param>
        /// <response code="200">Profissional veterinário excluído com sucesso.</response>
        /// <response code="404">Profissional veterinário não encontrado.</response>
        /// <response code="500">Erro interno.</response>
        [HttpDelete("excluirProfissionalVeterinario/{id}")]
        [ProducesResponseType(typeof(IActionResult), 200)]
        [ProducesResponseType(typeof(IActionResult), 404)]
        [ProducesResponseType(typeof(IActionResult), 500)]
        public async Task<IActionResult> ExcluirProfissionalVeterinario(int id)
        {
            var veterinarioExistente = await profissionalVeterinarioService.ObterProfissionalVeterinarioPorId(id);
            if (veterinarioExistente == null)
            {
                return NotFound("Profissional veterinário não encontrado.");
            }

            try
            {
                await profissionalVeterinarioService.ExcluirProfissionalVeterinarioAsync(id);
                return Ok("Profissional veterinário excluído com sucesso.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }
    }
}
