using Microsoft.AspNetCore.Mvc;
using ConstruSoftTicket.Application.Interfaces;
using ConstruSoftTicket.Application.DTOs;

namespace ConstruSoftTicket.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto dto)
        {
            var result = _authService.Login(dto.Email, dto.Password);

            if (!result)
                return Unauthorized("Credenciales incorrectas");

            return Ok(new { success = true });
        }
    }
}