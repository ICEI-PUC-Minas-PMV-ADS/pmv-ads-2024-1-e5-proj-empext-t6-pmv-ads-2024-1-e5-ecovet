using System.ComponentModel.DataAnnotations;

namespace Domain.Dto
{
    public class VagaModel
    {
        [Key]

        public int IDVaga { get; set; }
        public string Descricao { get; set; }
        public string Requisitos { get; set; }
        public string PeriodoDeDisponibilidade { get; set; }
        public int IdClinicaVeterinaria { get; set; }
    }
}
