using ConstruSoftTicket.Domain.Entities;

namespace ConstruSoftTicket.Application.Interfaces;

public interface ITicketRepository
{
    void Add(Ticket ticket);
}