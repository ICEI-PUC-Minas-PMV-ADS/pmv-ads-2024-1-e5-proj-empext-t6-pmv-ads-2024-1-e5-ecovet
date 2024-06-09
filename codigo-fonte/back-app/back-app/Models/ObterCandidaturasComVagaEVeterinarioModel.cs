using Domain.Dto;

namespace back_app.Models
{
    public class ObterCandidaturasComVagaEVeterinarioModel
    {
        public CandidaturaModel Candidatura { get; set; }
        public ProfissionalVeterinarioModel? ProfissionalVeterinario { get; set; }
        public VagaModel? Vaga { get; set; }
        public ClinicaVeterinariaModel? ClinicaVeterinaria { get; set; }
    }
}
