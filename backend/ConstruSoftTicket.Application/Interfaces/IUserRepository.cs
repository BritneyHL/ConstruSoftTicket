using ConstruSoftTicket.Domain.Entities;

namespace ConstruSoftTicket.Application.Interfaces
{
    public interface IUserRepository
    {
        User? GetByEmail(string email);
        void Add(User user);
    }
}