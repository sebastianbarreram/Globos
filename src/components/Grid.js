import React, { useState } from "react";
import useStyles from "./Grid.style";

export default function Grid({
  cells,
  setCells,
  currentColor,
  setCurrentColor,
}) {
  const classes = useStyles();
  const colores = [];
  cells.forEach((element) => {
    colores.push(element.color);
  });
  const [colors, setColors] = useState(colores);
  const [colorHistory, setColorHistory] = useState([]);

  function tipoToClass(tipo) {
    var tipoClass = "";
    if (tipo === "1") {
      tipoClass = "triangletopleft";
    } else if (tipo === "2") {
      tipoClass = "triangletopright";
    } else if (tipo === "3") {
      tipoClass = "trianglebottomleft";
    } else if (tipo === "4") {
      tipoClass = "trianglebottomright";
    } else if (tipo === "0") {
      tipoClass = "rectangle";
    }
    return tipoClass;
  }

  let cellsToRender = [];
  for (var i = 0; i < cells.length; i++) {
    cellsToRender.push(
      <div key={i} id={i} className={tipoToClass(cells[i].tipo)} />
    );
  }

  function contarColores(colors) {
    var repetidos = {};
    colors.forEach(function (numero) {
      repetidos[numero] = (repetidos[numero] || 0) + 1;
    });
    return repetidos;
  }

  const updateCell = (event) => {
    event.preventDefault();
    var id = event.target.id;
    var divCell = document.getElementById(id);
    if (event.type === "click") {
      // console.log("Left click");
      divCell.style.setProperty("--customColor", currentColor);
      colors[id] = currentColor;
      colorHistory.push(currentColor);
    } else if (event.type === "contextmenu") {
      const OffCell = "#ffffff";
      // console.log("Right click");
      divCell.style.setProperty("--customColor", OffCell);
      colors[id] = OffCell;
    }
    console.log(colors);
    localStorage.setItem("colors", JSON.stringify(colors));
    console.log(contarColores(colors));
  };

  return (
    <div>
      <div className="colorSwatchContainer">
        {[...new Set(colorHistory.map((color) => color))].map((color) => (
          <div
            key={color}
            onClick={() => setCurrentColor(color)}
            className="colorSwatch"
            style={{ background: color }}
          />
        ))}
      </div>
      <div
        className={classes.container}
        onClick={updateCell}
        onContextMenu={updateCell}
      >
        {cellsToRender}
      </div>
    </div>
  );
}
