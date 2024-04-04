using DbAdapter.Repositories;
using Domain.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace DbAdapter.Microsoft.Extensions.DependencyInjection
{
    public static class DbAdapterServiceCollectionExtensions
    {
        public static IServiceCollection AddDbAdapter(
         this IServiceCollection services, DbAdapterConfiguration configuration)
        {
            if (configuration is null)
            {
                throw new System.ArgumentNullException(nameof(configuration));
            }

            services.AddSingleton(configuration);
            services.AddScoped<IClinicaVeterinariaReadOnly, ClinicaVeterinariaReadOnly>();
            //services.AddScoped<IIntegracaoTotvsRepositoryWriteOnly, IntegracaoTotvsRepositoryWriteOnly>();

            services.AddScoped(d => new DbAdapterContext(
                configuration.SqlConnectionString));

            return services;
        }
    }
}
