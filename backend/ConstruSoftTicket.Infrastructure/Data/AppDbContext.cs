using ConstruSoftTicket.Domain.Entities;
using ConstruSoftTicket.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace ConstruSoftTicket.Infrastructure.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Ticket> Tickets => Set<Ticket>();
    public DbSet<User> Users => Set<User>();
}