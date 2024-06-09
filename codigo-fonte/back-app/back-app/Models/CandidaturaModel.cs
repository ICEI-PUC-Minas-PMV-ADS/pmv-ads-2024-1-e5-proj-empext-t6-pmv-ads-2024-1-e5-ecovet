namespace back_app.Models
{
    public class CandidaturaModel
    {
        public int IDCandidatura { get; set; }
        public string Status { get; set; }
        public DateTime DataDaCandidatura { get; set; }
        public int IdProfissionalVeterinario { get; set; }
        public int IdVaga { get; set; }
    }
}
