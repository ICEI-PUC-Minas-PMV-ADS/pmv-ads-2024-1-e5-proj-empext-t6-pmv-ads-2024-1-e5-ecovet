using AutoMapper;
using Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace back_app.Controller
{
    [Route("[controller]")]
    public class CandidaturaController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly ICandidaturaService candidaturaService;

        public CandidaturaController(IMapper mapper, IClinicaVeterinariaService clinicaVeterinariaService)
        {
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            this.candidaturaService = candidaturaService ??
                        throw new ArgumentNullException(nameof(candidaturaService));
        }
    }
}
