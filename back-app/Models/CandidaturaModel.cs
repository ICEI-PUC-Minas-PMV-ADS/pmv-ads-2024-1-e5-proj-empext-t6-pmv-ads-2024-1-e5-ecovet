using Domain.Dto;

namespace back_app.Models
{
    public class CandidaturaModel
    {
        public int IDCandidatura { get; set; }
        public string Status { get; set; }
        public DateTime DataDaCandidatura { get; set; }

        public ProfissionalVeterinario ProfissionalVeterinario { get; set; }
        public Vaga Vaga { get; set; }
    }
}
