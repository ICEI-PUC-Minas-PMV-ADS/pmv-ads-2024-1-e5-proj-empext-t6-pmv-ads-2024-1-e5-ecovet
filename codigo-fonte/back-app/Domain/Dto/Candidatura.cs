using System.ComponentModel.DataAnnotations;

namespace Domain.Dto
{
    public class Candidatura
    {
        [Key]

        public int IDCandidatura { get; set; }
        public string Status { get; set; }
        public DateTime DataDaCandidatura { get; set; }
        public int IdProfissionalVeterinario { get; set; }
        public int IdVaga { get; set; }
    }
}
