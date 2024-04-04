using Application;
using Domain.Services;

namespace back_app.Startups
{
    /// <summary>
    /// Classe para configuração da injeção de dependência.
    /// </summary>
    public static class DIStartup
    {
        /// <summary>
        /// Adição das injeções de dependências.
        /// </summary>
        /// <param name="services">Serviço .Net Core</param>
        public static void AddDICustomizado(this IServiceCollection services)
        {
            services.AddHttpContextAccessor();

            services.AddScoped<IClinicaVeterinariaService, ClinicaVeterinariaService>();

            //services.AddScoped<IFuncionariosService, FuncionariosService>();

            //services.AddScoped<IFuncoesService, FuncoesService>();

            //services.AddScoped<ISecoesService, SecoesService>();



        }
    }
}
