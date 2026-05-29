using System.Linq.Expressions;
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
    try
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(new
            {
                seccess = false,
                message = "Datos invalidos.",
                errors = ModelState
            });
        }

        dto.Titulo = dto.Titulo.Trim();
        dto.Descripcion = dto.Descripcion.Trim();

        ticketService.CrearTicket(dto);

        return Ok(new
        {
           secces = true,
           message = "Ticket registrado correctamente."
        });
    }    
    catch (Exception ex)
    {
        return StatusCode(500, new
        {
        success = false,
        message = "Ocurrio un error interno.",
        detail = ex.Message
        });
    }
}
}