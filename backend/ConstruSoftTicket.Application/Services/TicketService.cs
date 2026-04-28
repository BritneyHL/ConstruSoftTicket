using System.Runtime.CompilerServices;
using ConstruSoftTicket.Application.DTOs;
using ConstruSoftTicket.Application.Interfaces;
using ConstruSoftTicket.Domain.Entities;

namespace ConstruSoftTicket.Application.Services;

public class TicketService : ITicketService
{
    private readonly ITicketRepository repository;

    public TicketService(ITicketRepository repository)
    {
        this.repository = repository;
    }
    public void CrearTicket(CreateTicketDto dto)
    {
        var ticket =  new Ticket
        {
            Id = Guid.NewGuid(),
            Titulo = dto.Titulo,
            Descripcion = dto.Descripcion,
            FechaCreacion = DateTime.UtcNow,
            Estado = "Abierto"
        };
            
        repository.Add(ticket);
    }
}