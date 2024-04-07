using System.ComponentModel.DataAnnotations;

namespace Domain.Dto
{
    public class Vaga
    {
        [Key]

        public int IDVaga { get; set; }
        public string Descricao { get; set; }
        public string Requisitos { get; set; }
        public string PeriodoDeDisponibilidade { get; set; }
        public int IDClinicaVeterinaria { get; set; }

    }
}
