import React, { useState } from "react";
import "./comparar.css";

export default function Comparar() {
  const [form, setForm] = useState({
    temperatura: "",
    pH: "",
    gH: "",
    litros: "",
  });

  function updateForm(value) {
    setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    // Aquí puedes hacer lo que necesites con los datos del formulario
    // Por ejemplo, puedes llamar a una función para procesar los datos o enviarlos a una API

    // Limpia el formulario
    setForm({ temperatura: "", pH: "", gH: "", litros: "" });
  }

  return (
    <div className="form-container">
      <h3>Agrega tu acuario</h3>
      <form onSubmit={onSubmit}>
        <div className="form-field-container">
          <label htmlFor="temperatura">Temperatura</label>
          <input
            type="text"
            className="form-control"
            id="temperatura"
            value={form.temperatura}
            onChange={(e) => updateForm({ temperatura: e.target.value })}
          />
        </div>

        <div className="form-field-container">
          <label htmlFor="ph">pH</label>
          <input
            type="text"
            className="form-control"
            id="ph"
            value={form.pH}
            onChange={(e) => updateForm({ pH: e.target.value })}
          />
        </div>

        <div className="form-field-container">
          <label htmlFor="gh">gH</label>
          <input
            type="text"
            className="form-control"
            id="gh"
            value={form.gH}
            onChange={(e) => updateForm({ gH: e.target.value })}
          />
        </div>

        <div className="form-field-container">
          <label htmlFor="litros">Litros</label>
          <input
            type="text"
            className="form-control"
            id="litros"
            value={form.litros}
            onChange={(e) => updateForm({ litros: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Comparar"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
