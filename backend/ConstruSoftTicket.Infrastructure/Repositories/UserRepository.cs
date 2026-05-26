using ConstruSoftTicket.Application.Interfaces;
using ConstruSoftTicket.Domain.Entities;
using ConstruSoftTicket.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
 
namespace ConstruSoftTicket.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _context;
 
        public UserRepository(AppDbContext context)
        {
            _context = context;
        }
 
        public User? GetByEmail(string email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);
        }
 
        public void Add(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }
    }
}