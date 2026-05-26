import { useState } from "react";
import InputField from "../components/InputField";
import FormMessage from "../components/FormMessage";
import { createTicket } from "../service/ticketService";
import "../styles/Ticket.css";

export default function CreateTicket() {

  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: ""
  });

  const [errors, setErrors] = useState({});

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.titulo.trim()) {
      newErrors.titulo = "El título es obligatorio.";
    } else if (formData.titulo.trim().length < 5) {
      newErrors.titulo =
        "El título debe tener al menos 5 caracteres.";
    }

    if (!formData.descripcion.trim()) {
      newErrors.descripcion = "La descripción es obligatoria.";
    } else if (formData.descripcion.trim().length < 10) {
      newErrors.descripcion =
        "La descripción debe tener al menos 10 caracteres.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setMessageType("");

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      const result = await createTicket({
        titulo: formData.titulo.trim(),
        descripcion: formData.descripcion.trim()
      });

      setMessageType("success");
      setMessage(result.mensaje || "Ticket registrado correctamente.");

      setFormData({
        titulo: "",
        descripcion: ""
      });

      setErrors({});
    } catch (error) {
      console.error("Error al registrar ticket:", error);

      setMessageType("error");
      setMessage(
        "No se pudo registrar el ticket. Revise la conexión con la API."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <h1>Registro de Ticket</h1>

      <p>
        Complete la información básica de la incidencia técnica.
        Los datos ingresados deben ser claros para facilitar
        su atención posterior.
      </p>

      <form onSubmit={handleSubmit}>

        <InputField
          label="Título del ticket"
          name="titulo"
          value={formData.titulo}
          placeholder="Ejemplo: PC no enciende"
          required={true}
          onChange={handleChange}
          error={errors.titulo}
        />

        <div>
          <label htmlFor="descripcion">
            Descripción de la incidencia
          </label>

          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            placeholder="Describa brevemente el problema encontrado"
            required
            rows="5"
            onChange={handleChange}
          />

          {errors.descripcion && (
            <p>{errors.descripcion}</p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registrando..." : "Registrar ticket"}
        </button>

      </form>

      <FormMessage
        type={messageType}
        message={message}
      />

    </main>
  );
}