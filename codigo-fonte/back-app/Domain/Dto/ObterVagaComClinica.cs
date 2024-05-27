namespace Domain.Dto
{
    public class ObterVagaComClinica
    {
        public int IDVaga { get; set; }
        public string TituloVaga { get; set; }
        public string Descricao { get; set; }
        public string Requisitos { get; set; }
        public string PeriodoDeDisponibilidade { get; set; }
        public int IDClinicaVeterinaria { get; set; }

        public ClinicaVeterinaria ClinicaVaga { get; set; }
    }
}
