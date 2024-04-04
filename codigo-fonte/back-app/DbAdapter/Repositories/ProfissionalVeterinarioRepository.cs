using Domain.Dto;
using Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace DbAdapter.Repositories
{
    public class ProfissionalVeterinarioRepository : IProfissionalVeterinarioRepository
    {
        private readonly EcoVetContext ecoVetContext;

        public ProfissionalVeterinarioRepository(EcoVetContext ecoVetContext)
        {
            this.ecoVetContext = ecoVetContext;
        }
    }
}
