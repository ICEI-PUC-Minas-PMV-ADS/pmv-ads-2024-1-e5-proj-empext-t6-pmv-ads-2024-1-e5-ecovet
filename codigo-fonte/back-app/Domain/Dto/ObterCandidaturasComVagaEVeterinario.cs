namespace Domain.Dto
{
    public class ObterCandidaturasComVagaEVeterinario
    {
        public Candidatura Candidatura { get; set; }
        public ProfissionalVeterinario ProfissionalVeterinario { get; set; }
        public Vaga Vaga { get; set; }
        public ClinicaVeterinaria ClinicaVeterinaria { get; set; }

    }
}
