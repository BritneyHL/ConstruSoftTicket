using ConstruSoftTicket.Application.DTOs;

namespace ConstruSoftTicket.Application.Interfaces;

public interface ITicketService
{
    void CrearTicket(CreateTicketDto dto);
}