using System.ComponentModel.DataAnnotations;

namespace Domain.Dto
{
    public class ProfissionalVeterinario
    {
        [Key]

        public int IDProfissional { get; set; }
        public string Nome { get; set; }
        public string Especialidade { get; set; }
        public string Senha { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public string Disponibilidade { get; set; }
        public string Localizacao { get; set; }
    }
}
