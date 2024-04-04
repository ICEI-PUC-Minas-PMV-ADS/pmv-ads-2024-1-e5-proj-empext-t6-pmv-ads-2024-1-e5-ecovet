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
                CreateMap<ClinicaVeterinariaModel, ClinicaVeterinaria>().ReverseMap();
                CreateMap<ClinicaVeterinaria, ClinicaVeterinariaModel>().ReverseMap();

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
