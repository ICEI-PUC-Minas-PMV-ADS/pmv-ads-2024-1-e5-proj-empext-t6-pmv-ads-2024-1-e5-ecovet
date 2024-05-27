using AutoMapper;
using back_app.Models;
using Domain.Dto;

namespace back_app.Startups
{
    public static class AutoMapperApiStartup
    {
        public class WebApiMapperProfile : Profile
        {
            public WebApiMapperProfile()
            {
                CreateMap<ClinicaVeterinariaModel, ClinicaVeterinaria>();
                CreateMap<ClinicaVeterinaria, ClinicaVeterinariaModel>();
                CreateMap<Vaga, VagaModel>();
                CreateMap<VagaModel, Vaga>();
                CreateMap<Candidatura, CandidaturaModel>();
                CreateMap<CandidaturaModel, Candidatura>();
                CreateMap<ProfissionalVeterinario, ProfissionalVeterinarioModel>();
                CreateMap<ProfissionalVeterinarioModel, ProfissionalVeterinario>();
                CreateMap<ObterVagaComClinica, ObterVagaComClinicaModel>().ReverseMap();

            }
        }
        public static void AddAutoMapperCustomizadoApi(this IServiceCollection servicos)
        {
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AllowNullDestinationValues = true;
                mc.AllowNullCollections = true;
                mc.AddProfile(new WebApiMapperProfile());
            });

            var mapper = mappingConfig.CreateMapper();
            servicos.AddSingleton(mapper);
        }
    }
}
