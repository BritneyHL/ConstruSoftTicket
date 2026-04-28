using ConstruSoftTicket.Application.Interfaces;

namespace ConstruSoftTicket.Application.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;

        public AuthService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public bool Login(string email, string password)
        {
            var user = _userRepository.GetByEmail(email);

            if (user == null)
                return false;

            return user.Password == password;
        }
    }
}