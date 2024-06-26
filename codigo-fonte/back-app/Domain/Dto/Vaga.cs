﻿using System.ComponentModel.DataAnnotations;
using Domain.Dto.Enum;

namespace Domain.Dto
{
    public class Vaga
    {
        [Key]

        public int IDVaga { get; set; }
        public string TituloVaga { get; set; }
        public string Descricao { get; set; }
        public string Requisitos { get; set; }
        public string PeriodoDeDisponibilidade { get; set; }
        public ExperienciaEnum Experiencia { get; set; }
        public int IDClinicaVeterinaria { get; set; }
        public StatusVaga StatusVaga { get; set; }
    }
    public enum StatusVaga
    {
        Aberto = 1,
        Fechado = 2
    }
}
