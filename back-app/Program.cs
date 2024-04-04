using back_app.Startups;
using DbAdapter;
using DbAdapter.Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var dbAdapterConfig = builder.Configuration.GetSection("DbAdapterConfiguration").Get<DbAdapterConfiguration>();

builder.Services.AddDbContext<EcoVetContext>(options =>
    options.UseSqlServer(dbAdapterConfig.SqlConnectionString));

builder.Services.AddDbAdapter(dbAdapterConfig);

builder.Services.AddAutoMapperCustomizadoApi();

builder.Services.AddDICustomizado();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
