import "./App.css";
import React, { useState } from "react";
import useStyles from "./App.styles";
import GloboPicker from "./components/GloboPicker";
import ColorPicker from "./components/ColorPicker";
import Grid from "./components/Grid.js";

const offCell = {
  on: true,
  color: "#ffffff",
  tipo: "0",
};
const globoType = sessionStorage.getItem("globoType");
const cuadricula = sessionStorage.getItem("cuadricula");
console.log("Cuadricula en App.js:", cuadricula);
const initialCells = Array.from(
  { length: Math.pow(cuadricula, 2) },
  () => offCell
);
if (globoType === "cojin") {
  for (var i = 0; i < initialCells.length; i++) {
    const gridInit1 = cuadricula - 1;
    const gridInit2 = gridInit1 + 2;
    const gridInit3 = Math.pow(cuadricula, 2) / 2;
    const gridInit4 = gridInit3 + gridInit1;

    //Para los triángulos tipo '1'
    if (i === cuadricula / 2 - 1) {
      initialCells[i] = {
        on: true,
        color: "#ffffff",
        tipo: "1",
      };
      var valorTipo1 = cuadricula / 2 - 1 + gridInit1;
    }
    if (i === valorTipo1 && valorTipo1 < Math.pow(cuadricula, 2) / 2 - 1) {
      initialCells[i] = {
        on: true,
        color: "#ffffff",
        tipo: "1",
      };
      valorTipo1 = valorTipo1 + gridInit1;
    }

    //Para los triángulos tipo '2'
    if (i === cuadricula / 2) {
      initialCells[i] = {
        on: true,
        color: "#ffffff",
        tipo: "2",
      };
      var valorTipo2 = cuadricula / 2 + gridInit2;
    }
    if (i === valorTipo2 && valorTipo2 < Math.pow(cuadricula, 2) / 2) {
      initialCells[i] = {
        on: true,
        color: "#ffffff",
        tipo: "2",
      };
      valorTipo2 = valorTipo2 + gridInit2;
    }

    //Para los triángulos tipor 3
    if (i === gridInit3) {
      initialCells[i] = {
        on: true,
        color: "#ffffff",
        tipo: "3",
      };
      var valorTipo3 = gridInit3 + gridInit2;
    }
    if (i === valorTipo3) {
      initialCells[i] = {
        on: true,
        color: "#ffffff",
        tipo: "3",
      };
      valorTipo3 = valorTipo3 + gridInit2;
    }

    //Para los triángulos tipo '4'
    if (i === gridInit4) {
      initialCells[i] = {
        on: true,
        color: "#ffffff",
        tipo: "4",
      };
      var valorTipo4 = gridInit4 + gridInit1;
    }
    if (i === valorTipo4) {
      initialCells[i] = {
        on: true,
        color: "#ffffff",
        tipo: "4",
      };
      valorTipo4 = valorTipo4 + gridInit1;
    }
  }
} else if (globoType === "puntilla") {
  initialCells[3] = {
    on: true,
    color: "#ffffff",
    tipo: "5",
  };
  initialCells[0] = {
    on: true,
    color: "#ffffff",
    tipo: "1",
  };
  initialCells[1] = {
    on: true,
    color: "#ffffff",
    tipo: "2",
  };
  initialCells[6] = {
    on: true,
    color: "#ffffff",
    tipo: "6",
  };
  initialCells[4] = {
    on: true,
    color: "#ffffff",
    tipo: "7",
  };
  initialCells[7] = {
    on: true,
    color: "#ffffff",
    tipo: "8",
  };
  console.log("Initialcells antes de puntilla:", initialCells);
}

function App() {
  const [currentColor, setCurrentColor] = useState("#5DC1B9");
  const [cells, setCells] = useState(initialCells);
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <GloboPicker />
      <ColorPicker
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <Grid
        cells={cells}
        setCells={setCells}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
    </div>
  );
}

export default App;
