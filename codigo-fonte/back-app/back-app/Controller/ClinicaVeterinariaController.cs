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
    public class ClinicaVeterinariaController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IClinicaVeterinariaService clinicaVeterinariaService;
        private readonly IVagaService vagaService;

        public ClinicaVeterinariaController(IMapper mapper, IClinicaVeterinariaService clinicaVeterinariaService, IVagaService vagaService)
        {
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            this.clinicaVeterinariaService = clinicaVeterinariaService ??
                        throw new ArgumentNullException(nameof(clinicaVeterinariaService));
            this.vagaService = vagaService ??
                        throw new ArgumentNullException(nameof(vagaService)) ;
        }

        /// <summary>
        /// Obter clínicas veterinárias.
        /// </summary>
        /// <response code="200">Lista de resultados.</response>
        /// <response code="400">Dados inválidos.</response>
        /// <response code="500">Erro interno.</response>
        [HttpGet("obterClinicasVeterinarias")]
        [ProducesResponseType(typeof(IEnumerable<ClinicaVeterinariaModel>), 200)]
        //[Authorize]
        public async Task<IActionResult> ObterClinicasVeterinarias()
        {
            var result = await clinicaVeterinariaService.ObterClinicasVeterinariasAsync();
            return Ok(mapper.Map<IEnumerable<ClinicaVeterinariaModel>>(result));
        }

        /// <summary>
        /// Obter clínica veterinária por ID.
        /// </summary>
        /// <param name="id">ID da clínica veterinária.</param>
        /// <response code="200">Clínica veterinária encontrada.</response>
        /// <response code="404">Clínica veterinária não encontrada.</response>
        /// <response code="500">Erro interno.</response>
        [HttpGet("obterClinicaVeterinariaPorId/{id}")]
        [ProducesResponseType(typeof(ClinicaVeterinariaModel), 200)]
        [ProducesResponseType(typeof(IActionResult), 404)]
        [ProducesResponseType(typeof(IActionResult), 500)]
        public async Task<IActionResult> ObterClinicaVeterinariaPorId(int id)
        {
            var clinica = await clinicaVeterinariaService.ObterClinicasVeterinariasPorIdAsync(id);
            if (clinica == null)
            {
                return NotFound("Clínica veterinária não encontrada.");
            }
            return Ok(mapper.Map<ClinicaVeterinariaModel>(clinica));
        }
        /// <summary>
        /// Obter vagas clinica.
        /// </summary>
        /// <response code="200">Lista de resultados.</response>
        /// <response code="400">
        ///     Dados inválidos
        /// </response>
        /// <response code="500">Erro interno.</response>
        [HttpGet("{idClinica}/Vagas"), AllowAnonymous]
        [ProducesResponseType(typeof(IEnumerable<VagaModel>), 200)]
        public async Task<IActionResult> ObterVagasClinicaAsync(int idClinica)
        {
            var retorno = await vagaService.ObterVagasClinicaAsync(idClinica);

            return Ok(mapper.Map<IEnumerable<ObterVagaComClinicaModel>>(retorno));
        }
        /// <summary>
        /// Cadastro de clínica veterinária.
        /// </summary>
        /// <response code="200">Clínica veterinária cadastrada com sucesso.</response>
        /// <response code="400">Dados inválidos.</response>
        /// <response code="500">Erro interno.</response>
        [HttpPost("cadastrarClinicaVeterinaria")]
        [ProducesResponseType(typeof(IActionResult), 200)]
        [ProducesResponseType(typeof(IActionResult), 400)]
        [ProducesResponseType(typeof(IActionResult), 500)]
        public async Task<IActionResult> CadastrarClinicaVeterinaria([FromBody] ClinicaVeterinariaModel clinicaVeterinariaModel)
        {
            if (clinicaVeterinariaModel == null)
            {
                return BadRequest("Dados inválidos.");
            }

            var clinica = mapper.Map<ClinicaVeterinaria>(clinicaVeterinariaModel);

            try
            {
                await clinicaVeterinariaService.InserirClinicaAsync(clinica);
                return Ok("Clínica veterinária cadastrada com sucesso.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }

        /// <summary>
        /// Atualizar clínica veterinária.
        /// </summary>
        /// <param name="id">ID da clínica veterinária.</param>
        /// <param name="clinicaVeterinariaModel">Dados da clínica veterinária a serem atualizados.</param>
        /// <response code="200">Clínica veterinária atualizada com sucesso.</response>
        /// <response code="400">Dados inválidos.</response>
        /// <response code="404">Clínica veterinária não encontrada.</response>
        /// <response code="500">Erro interno.</response>
        [HttpPut("atualizarClinicaVeterinaria/{id}")]
        [ProducesResponseType(typeof(IActionResult), 200)]
        [ProducesResponseType(typeof(IActionResult), 400)]
        [ProducesResponseType(typeof(IActionResult), 404)]
        [ProducesResponseType(typeof(IActionResult), 500)]
        public async Task<IActionResult> AtualizarClinicaVeterinaria(int id, [FromBody] ClinicaVeterinariaModel clinicaVeterinariaModel)
        {
            if (clinicaVeterinariaModel == null)
            {
                return BadRequest("Dados inválidos.");
            }

            var clinicaExistente = await clinicaVeterinariaService.ObterClinicasVeterinariasPorIdAsync(id);
            if (clinicaExistente == null)
            {
                return NotFound("Clínica veterinária não encontrada.");
            }

            clinicaExistente.Nome = clinicaVeterinariaModel.Nome;
            clinicaExistente.Endereco = clinicaVeterinariaModel.Endereco;
            clinicaExistente.Senha = clinicaVeterinariaModel.Senha;
            clinicaExistente.Telefone = clinicaVeterinariaModel.Telefone;
            clinicaExistente.Email = clinicaVeterinariaModel.Email;
            clinicaExistente.DescricaoDosServicos = clinicaVeterinariaModel.DescricaoDosServicos;

            try
            {
                await clinicaVeterinariaService.AtualizarClinicaAsync(clinicaExistente);
                return Ok("Clínica veterinária atualizada com sucesso.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }


        /// <summary>
        /// Excluir clínica veterinária.
        /// </summary>
        /// <param name="id">ID da clínica veterinária a ser excluída.</param>
        /// <response code="200">Clínica veterinária excluída com sucesso.</response>
        /// <response code="404">Clínica veterinária não encontrada.</response>
        /// <response code="500">Erro interno.</response>
        [HttpDelete("excluirClinicaVeterinaria/{id}")]
        [ProducesResponseType(typeof(IActionResult), 200)]
        [ProducesResponseType(typeof(IActionResult), 404)]
        [ProducesResponseType(typeof(IActionResult), 500)]
        public async Task<IActionResult> ExcluirClinicaVeterinaria(int id)
        {
            var clinicaExistente = await clinicaVeterinariaService.ObterClinicasVeterinariasPorIdAsync(id);
            if (clinicaExistente == null)
            {
                return NotFound("Clínica veterinária não encontrada.");
            }

            try
            {
                await clinicaVeterinariaService.ExcluirClinicaAsync(id);
                return Ok("Clínica veterinária excluída com sucesso.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }
    }
}
