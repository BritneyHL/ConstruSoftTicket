using System.ComponentModel.DataAnnotations;

namespace ConstruSoftTicket.Application.DTOs;

public class CreateTicketDto
{
    [Required(ErrorMessage ="El titulo es obligatorio.")]
    [MinLength(5, ErrorMessage ="El titulo debe tener al menos 5 caracteres.")]
    [MaxLength(100, ErrorMessage ="El titulo no puede superar los 100 caracteres.")]
    public string Titulo { get; set; } = string.Empty;
[Required(ErrorMessage ="La descripcion es obligatoria.")]
[MinLength(10, ErrorMessage ="La descripcion debe tener al menos 10 caracteres.")]
[MaxLength(500, ErrorMessage ="La descripcion no puede superar las 500 caracteres")]
    public string Descripcion { get; set; } = string.Empty;

}