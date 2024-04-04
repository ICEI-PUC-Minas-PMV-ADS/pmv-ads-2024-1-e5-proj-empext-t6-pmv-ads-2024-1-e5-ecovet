using Domain.Dto;  

namespace Domain.Repositories
{
    public interface IVagaRepository
    {
        /// <summary>
        /// Obtem as vagas.
        /// </summary>
        Task<IEnumerable<Vaga>> ObterVagasAsync();
    }
}
