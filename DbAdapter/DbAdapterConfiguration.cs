using System.ComponentModel.DataAnnotations;

namespace DbAdapter
{
    public class DbAdapterConfiguration
    {
        [Required]
        public string SqlConnectionString { get; set; }
    }
}
