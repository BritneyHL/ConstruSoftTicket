using ConstruSoftTicket.Application.DTOs;
using ConstruSoftTicket.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ConstruSoftTicket.API.Controllers;

[ApiController]
[Route("api/[controller]")]

public class TicketController : ControllerBase
{
    private readonly ITicketService ticketService;

    public TicketController(ITicketService ticketService)
    {
        this.ticketService = ticketService;
    }
    [HttpPost]
    
    public IActionResult Crear([FromBody] CreateTicketDto dto)
    {
        ticketService.CrearTicket(dto);
        return Ok(new { mensaje = "Ticket Registrado Correctamente"});
    }
}