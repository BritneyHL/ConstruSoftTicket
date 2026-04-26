import React, { useState } from "react";

export default function CreateTicket() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ticket = {
      titulo,
      descripcion,
    };

    try {
      const response = await fetch("http://localhost:5010/api/ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
      });

      if (!response.ok) {
        throw new Error("Error al registrar ticket");
      }

      alert("Ticket registrado ✅");
      setTitulo("");
      setDescripcion("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Crear Ticket</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </div>

        <div>
          <label>Descripción</label>
          <textarea
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)}
          />
        </div>

        <button type="submit">Registrar ticket</button>
      </form>
    </div>
  );
}