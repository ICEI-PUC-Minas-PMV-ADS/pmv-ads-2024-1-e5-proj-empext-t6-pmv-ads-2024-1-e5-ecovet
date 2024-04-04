using System.ComponentModel.DataAnnotations;

namespace Domain.Dto
{
    public class Candidatura
    {
        [Key]

        public int IDCandidatura { get; set; }
        public string Status { get; set; }
        public DateTime DataDaCandidatura { get; set; }

        public ProfissionalVeterinario ProfissionalVeterinario { get; set; }
        public Vaga Vaga { get; set; }
    }
}
