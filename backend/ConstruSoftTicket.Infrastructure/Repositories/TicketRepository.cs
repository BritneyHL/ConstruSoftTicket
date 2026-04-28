using ConstruSoftTicket.Application.Interfaces;
using ConstruSoftTicket.Domain.Entities;
using ConstruSoftTicket.Infrastructure.Data;

namespace ConstruSoftTicket.Infrastructure.Repositories;
public class TicketRepository : ITicketRepository
{
    private readonly AppDbContext context;
    public TicketRepository(AppDbContext context)
    {
        this.context = context;
    }

    public void Add(Ticket ticket)
    {
        context.Tickets.Add(ticket);
        context.SaveChanges();
    }
}