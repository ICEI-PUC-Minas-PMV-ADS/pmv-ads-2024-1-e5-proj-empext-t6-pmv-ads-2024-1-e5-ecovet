using System.ComponentModel.DataAnnotations;

namespace Domain.Dto
{
    public class ClinicaVeterinaria
    {
        [Key]
        public int IDClinica { get; set; }
        public string Nome { get; set; }
        public string Endereco { get; set; }
        public string Senha { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public string DescricaoDosServicos { get; set; }
    }
}
