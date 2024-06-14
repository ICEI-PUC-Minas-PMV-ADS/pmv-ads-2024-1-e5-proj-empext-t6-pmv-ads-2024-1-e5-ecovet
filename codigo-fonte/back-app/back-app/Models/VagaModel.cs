using Domain.Dto.Enum;
using System.ComponentModel.DataAnnotations;

namespace Domain.Dto
{
    public class VagaModel
    {
        [Key]

        public int IDVaga { get; set; }
        public string TituloVaga { get; set; }
        public string Descricao { get; set; }
        public string Requisitos { get; set; }
        public string PeriodoDeDisponibilidade { get; set; }
        public int IdClinicaVeterinaria { get; set; }
        public ExperienciaEnumModel Experiencia { get; set; }
        public StatusVagaModel StatusVaga { get; set; }
    }
}
