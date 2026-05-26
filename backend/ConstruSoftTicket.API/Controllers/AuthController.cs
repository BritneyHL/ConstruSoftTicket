using Microsoft.AspNetCore.Mvc;
using ConstruSoftTicket.Application.Interfaces;
using ConstruSoftTicket.Application.DTOs;
using ConstruSoftTicket.Domain.Entities;
 
namespace ConstruSoftTicket.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IUserRepository _userRepository;
 
        public AuthController(
            IAuthService authService,
            IUserRepository userRepository)
        {
            _authService = authService;
            _userRepository = userRepository;
        }
 
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto dto)
        {
            var result = _authService.Login(dto.Email, dto.Password);
 
            if (!result)
                return Unauthorized("Credenciales incorrectas");
 
            return Ok(new { success = true });
        }
 
        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterDto dto)
        {
            var user = new User
            {
                Email = dto.Email
            };
 
            user.PasswordHash =
                _authService.HashPassword(
                    user,
                    dto.Password
                );
 
            _userRepository.Add(user);
 
            return Ok(new { success = true });
        }
    }
}