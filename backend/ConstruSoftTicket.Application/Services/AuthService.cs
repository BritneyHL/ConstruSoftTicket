using Microsoft.AspNetCore.Identity;
using ConstruSoftTicket.Application.Interfaces;
using ConstruSoftTicket.Domain.Entities;

namespace ConstruSoftTicket.Application.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;

        // HASHER
        private readonly PasswordHasher<User> _passwordHasher;

        public AuthService(IUserRepository userRepository)
        {
            _userRepository = userRepository;

            // INICIALIZAR HASHER
            _passwordHasher = new PasswordHasher<User>();
        }

        // HASH DE PASSWORD
        public string HashPassword(User user, string password)
        {
            return _passwordHasher.HashPassword(
                user,
                password
            );
        }

        // VERIFICAR PASSWORD
        public bool VerifyPassword(
            User user,
            string password
        )
        {
            var result =
                _passwordHasher.VerifyHashedPassword(
                    user,
                    user.PasswordHash,
                    password
                );

            return result ==
                PasswordVerificationResult.Success;
        }

        // LOGIN
        public bool Login(string email, string password)
        {
            var user = _userRepository.GetByEmail(email);

            if (user == null)
                return false;

            // VALIDAR PASSWORD HASHEADO
            return VerifyPassword(user, password);
        }
    }
}