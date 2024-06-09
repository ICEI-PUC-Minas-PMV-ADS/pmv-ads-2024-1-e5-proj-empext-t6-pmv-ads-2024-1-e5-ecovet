using AutoMapper;
using back_app.Models;
using Domain.Dto;
using Domain.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace back_app.Controller
{
    [Route("[controller]")]
    [ApiController]
    public class CandidaturaController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly ICandidaturaService candidaturaService;

        public CandidaturaController(IMapper mapper, ICandidaturaService candidaturaService)
        {
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            this.candidaturaService = candidaturaService ??
                                      throw new ArgumentNullException(nameof(candidaturaService));
        }

        [HttpGet()]
        [ProducesResponseType(typeof(IEnumerable<CandidaturaModel>), 200)]
        [Authorize]
        public async Task<IActionResult> ObterCandidaturas()
        {
            var candidaturas = await candidaturaService.ObterTodasCandidaturasAsync();
            return Ok(mapper.Map<IEnumerable<CandidaturaModel>>(candidaturas));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(CandidaturaModel), 200)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> ObterCandidaturaPorId(int id)
        {
            var candidatura = await candidaturaService.ObterCandidaturaPorIdAsync(id);
            if (candidatura == null)
                return NotFound("Candidatura não encontrada.");

            return Ok(mapper.Map<CandidaturaModel>(candidatura));
        }

        [HttpGet("Veterinario/{idVeterinario}")]
        [ProducesResponseType(typeof(IEnumerable<CandidaturaModel>), 200)]
        public async Task<IActionResult> ObterCandidaturasPorVeterinario(int idVeterinario)
        {
            var candidaturas = await candidaturaService.ObterCandidaturasPorVeterinarioAsync(idVeterinario);
            return Ok(mapper.Map<IEnumerable<ObterCandidaturasComVagaEVeterinarioModel>>(candidaturas));
        }

        [HttpGet("Vaga/{idVaga}")]
        [ProducesResponseType(typeof(IEnumerable<CandidaturaModel>), 200)]
        public async Task<IActionResult> ObterCandidaturasPorVaga(int idVaga)
        {
            var candidaturas = await candidaturaService.ObterCandidaturasPorVagaAsync(idVaga);
            return Ok(mapper.Map<IEnumerable<ObterCandidaturasComVagaEVeterinarioModel>>(candidaturas));
        }

        [HttpPost("cadastrarCandidatura")]
        [ProducesResponseType(201)]
        public async Task<IActionResult> CadastrarCandidatura([FromBody] CandidaturaModel candidaturaModel)
        {
            var candidatura = mapper.Map<Candidatura>(candidaturaModel);
            await candidaturaService.InserirCandidaturaAsync(candidatura);
            return CreatedAtAction(nameof(ObterCandidaturaPorId), new { id = candidatura.IDCandidatura }, candidaturaModel);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> AtualizarCandidatura(int id, [FromBody] CandidaturaModel candidaturaModel)
        {
            if (id != candidaturaModel.IDCandidatura)
                return BadRequest("ID da candidatura não coincide.");

            var candidatura = await candidaturaService.ObterCandidaturaPorIdAsync(id);
            if (candidatura == null)
                return NotFound("Candidatura não encontrada.");

            mapper.Map(candidaturaModel, candidatura);
            await candidaturaService.AtualizarCandidaturaAsync(candidatura);
            return NoContent();
        }

        [HttpPatch("{id}/status")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> AtualizarStatusCandidatura(int id, [FromBody] string novoStatus)
        {
            var candidatura = await candidaturaService.ObterCandidaturaPorIdAsync(id);
            if (candidatura == null)
                return NotFound("Candidatura não encontrada.");

            await candidaturaService.AtualizarStatusCandidaturaAsync(id, novoStatus);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> DeletarCandidatura(int id)
        {
            var candidatura = await candidaturaService.ObterCandidaturaPorIdAsync(id);
            if (candidatura == null)
                return NotFound("Candidatura não encontrada.");

            await candidaturaService.DeletarCandidaturaAsync(id);
            return Ok();
        }
    }
}
