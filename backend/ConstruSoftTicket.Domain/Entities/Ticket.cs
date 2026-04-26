namespace ConstruSoftTicket.Domain.Entities;

public class Ticket
{
    public Guid Id { get; set; }

    public string Titulo {get; set; } = string.Empty;

    public string Descripcion { get; set; } = string.Empty;

    public DateTime FechaCreacion { get; set; }

    public string Estado { get; set; } = string.Empty;
}