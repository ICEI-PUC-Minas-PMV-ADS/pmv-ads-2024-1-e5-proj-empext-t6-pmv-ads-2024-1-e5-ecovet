using back_app.Models;
using Domain.Dto;
using Domain.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

[Route("[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private readonly IAuthService _authService;

    public AuthController(IConfiguration configuration, IAuthService authService)
    {
        _configuration = configuration;
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] UserLoginModel user)
    {
        if (user.TipoLogin == Tipo.Clinica)
        {
            ClinicaVeterinaria usuarioRetornado = await _authService.LoginClinica(user.Email, user.Senha);

            if (usuarioRetornado != null)
            {
                user.Id = usuarioRetornado.IDClinica;
                user.NomeUsuario = usuarioRetornado.Nome;
                return Ok(new
                {
                    token = await GenerateToken(user)
                });
            }
        }
        else
        {
            ProfissionalVeterinario usuarioRetornado = await _authService.LoginVeterinario(user.Email, user.Senha);

            if (usuarioRetornado != null)
            {
                user.Id = usuarioRetornado.IDProfissional;
                user.NomeUsuario = usuarioRetornado.Nome;

                return Ok(new
                {
                    token = await GenerateToken(user)
                });
            }
        }

        return Unauthorized();
    }

    private async Task<string> GenerateToken(UserLoginModel user)
    {
        var claims = new[]
        {
            new Claim(ClaimTypes.Email, user.Email),
            new Claim("NomeUsuario", user.NomeUsuario),
            new Claim("IdUsuario", user.Id.ToString()),
            new Claim("Tipo", user.TipoLogin.ToString())
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtKey"]));

        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.Now.AddDays(1),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

}
