import React, { useState } from "react";
import useStyles from "./Grid.style";

export default function Grid({ cells, setCells, currentColor }) {
  // console.log(cells);
  const classes = useStyles();
  const colores = [];
  cells.forEach((element) => {
    colores.push(element.color);
  });
  const [colors, setColors] = useState(colores);
  // var colors = JSON.parse(localStorage.getItem("colors"));
  console.log(colors);

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
    var id = event.target.id;
    var divCell = document.getElementById(id);
    divCell.style.setProperty("--customColor", currentColor);
    console.log(id);
    console.log(currentColor);
    console.log(typeof currentColor);
    colors[id] = currentColor;
    console.log(colors[id]);
    console.log(colors);
    localStorage.setItem("colors", JSON.stringify(colors));
    console.log(contarColores(colors));
  };

  return (
    <div>
      <div className={classes.container} onClick={updateCell}>
        {cellsToRender}
      </div>
    </div>
  );
}
