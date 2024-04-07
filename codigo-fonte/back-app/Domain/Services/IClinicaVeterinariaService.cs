using Domain.Dto;

namespace Domain.Services
{
    public interface IClinicaVeterinariaService
    {
        #region Obter

        /// <summary>
        /// Obtem as clinicas veterinárias por id.
        /// </summary>
        Task<ClinicaVeterinaria> ObterClinicasVeterinariasPorIdAsync(int idClinicaVeterinaria);

        /// <summary>
        /// Processo de obter clinicas veterinarias.
        /// </summary>
        /// <returns>
        ///      Lista de clinicas veterinarias encontrados conforme critério de pesquisa.
        /// </returns>
        Task<IEnumerable<ClinicaVeterinaria>> ObterClinicasVeterinariasAsync();

        #endregion
        Task InserirClinicaAsync(ClinicaVeterinaria clinicaVeterinaria);

    }
}
