import React, { useState } from "react";
import useStyles from "./Grid.style";
import { typeToClassEnum } from "../constants/typeToClass.Enum";

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
    return typeToClassEnum[tipo];
  }

  let cellsToRender = [];
  for (var i = 0; i < cells.length; i++) {
    cellsToRender.push(
      <div key={i} id={i} className={tipoToClass(cells[i].tipo)} />
    );
  }

  function countingWhiteRectangles(number) {
    let result = 0;
    for (let i = number; i > 0; i--) {
      result += i;
    }
    return result;
  }

  function contarColores(colors) {
    var repetidos = {};
    colors.forEach(function (element, index) {
      if (cells[index].tipo === "0") {
        repetidos[element] = (repetidos[element] || 0) + 1;
      } else {
        repetidos[element] = (repetidos[element] || 0) + 0.5;
      }
    });
    repetidos["#ffffff"] -=
      countingWhiteRectangles(sessionStorage.getItem("cuadricula") / 2 - 1) * 4;
    return repetidos;
  }

  const updateCell = (event) => {
    event.preventDefault();
    var id = event.target.id;
    var divCell = document.getElementById(id);
    // console.log(divCell.className);
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
    // console.log(colors);
    localStorage.setItem("colors", JSON.stringify(colors));
    // console.log(contarColores(colors));
  };

  const contarPliegos = (event) => {
    window.alert(JSON.stringify(contarColores(colors)));
  };

  return (
    <div>
      <div className="colorSwatchContainer">
        {[...new Set(colorHistory.map((color) => color))].map((color) => (
          <div className="colorContainer">
            <div
              key={color}
              onClick={() => setCurrentColor(color)}
              className="colorSwatch"
              style={{ background: color }}
            />
            <p>{color}</p>
          </div>
        ))}
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <button onClick={contarPliegos}>Contar pliegos</button>
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
