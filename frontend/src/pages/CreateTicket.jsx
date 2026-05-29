import { useState } from "react";

import InputField from "../components/InputField";
import FormMessage from "../components/FormMessage";
import Button from "../components/Button"

import { createTicket } from "../service/ticketService";
import { normalizeText } from "../utils/normalizeText";

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
    <main
      className="
        min-h-service
        flex
        items-center
        justify-center
        bg-gray-100
        px-4
      "
    >
      <section
        className="
          bg-white
          shadow-lg
          rounded-lg
          p-8
          w-full
          max-w-xl
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            mb-2
            text-gray-800
          "
        >
          Registro de Ticket
        </h1>

        <p className="text-gray-600 mb-6">
          Complete la información básica de la incidencia técnica.
          Los datos ingresados deben ser claros para facilitar
          su atención posterior.
        </p>

        <form onSubmit={handleSubmit}>

          <InputField
            label="Título del ticket"
            name="titulo"
            value={formData.titulo}
            placeholder="Ejemplo: Equipo no inicia"
            required={true}
            onChange={handleChange}
            error={errors.titulo}
          />

          <div className="mb-4">
            <label 
            htmlFor="descripcion"
            className="
              block
              mb-2
              font-medium
              text-gray-700
            "
            >
              Descripción de la incidencia
            </label>

            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              placeholder="Describa detalladamente el problema"
              required
              rows="5"
              onChange={handleChange}
              className={`
                w-full
                border
                rounded
                px-3
                py-2
                outline-none
                focus:ring-2
                ${
                  errors.decripcion
                    ? "border-red-500 focus:ring-red-300"
                    : "border-red-300 focus:ring-blue-300"
                }
              `}
            />

            {errors.descripcion && (
              <p className="text-red-500 text-sm mt-1">
                {errors.descripcion}
              </p>
            )}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting 
            ? "Registrando..." 
            : "Registrar ticket"}
          </button>
        </form>

        <FormMessage
          type={messageType}
          message={message}
        />
      </section>
    </main>
  );
}