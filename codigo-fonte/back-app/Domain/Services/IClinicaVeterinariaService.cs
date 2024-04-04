using Domain.Dto;

namespace Domain.Services
{
    public interface IClinicaVeterinariaService
    {
        #region Obter

        /// <summary>
        /// Processo de obter clinicas veterinarias veterinarios.
        /// </summary>
        /// <returns>
        ///      Lista de clinicas veterinarias encontrados conforme critério de pesquisa.
        /// </returns>
        Task<IEnumerable<ClinicaVeterinaria>> ObterClinicasVeterinariasAsync();

        #endregion
    }
}
