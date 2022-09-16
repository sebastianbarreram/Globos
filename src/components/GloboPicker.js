import React, { useState } from "react";

export default function GloboPicker() {
  const [globo, setGlobo] = useState("cojin");
  const [pliegos, setPliegos] = useState(0);

  const handleSubmit = (e) => {
    // e.preventDefault();

    if (globo === "cojin") {
      const a = Math.sqrt(pliegos / 8);
      if (Number.isInteger(a)) {
        sessionStorage.setItem("cuadricula", a * 2);
        console.log("Si es entero");
      } else {
        console.log("Alerta, numero no es entero");
      }
    }
    sessionStorage.setItem("globo", globo);
    sessionStorage.setItem("pliegos", pliegos);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={globo} onChange={(e) => setGlobo(e.target.value)}>
          <option value="cojin">Cojín</option>
          <option value="puntilla">Puntilla</option>
          <option value="caja">Caja</option>
        </select>
        <label>
          Ingrese el número de pliegos:
          <input
            type="number"
            name="pliegos"
            value={pliegos}
            onChange={(e) => setPliegos(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
