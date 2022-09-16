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
const initialCells = Array.from(
  { length: Math.pow(sessionStorage.getItem("cuadricula"), 2) },
  () => offCell
);

for (var i = 0; i < initialCells.length; i++) {
  const cuadricula = sessionStorage.getItem("cuadricula");
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
      // id: i,
    };
    var valorTipo1 = cuadricula / 2 - 1 + gridInit1;
  }
  if (i === valorTipo1 && valorTipo1 < Math.pow(cuadricula, 2) / 2 - 1) {
    // console.log('valortipo1',valorTipo1)
    initialCells[i] = {
      on: true,
      color: "#ffffff",
      tipo: "1",
      // id: i,
    };
    valorTipo1 = valorTipo1 + gridInit1;
  }

  //Para los triángulos tipo '2'
  if (i === cuadricula / 2) {
    initialCells[i] = {
      on: true,
      color: "#ffffff",
      tipo: "2",
      // id: i,
    };
    var valorTipo2 = cuadricula / 2 + gridInit2;
    // console.log('valortipo2', valorTipo2)
  }
  if (i === valorTipo2 && valorTipo2 < Math.pow(cuadricula, 2) / 2) {
    initialCells[i] = {
      on: true,
      color: "#ffffff",
      tipo: "2",
      // id: i,
    };
    valorTipo2 = valorTipo2 + gridInit2;
  }

  //Para los triángulos tipor 3
  if (i === gridInit3) {
    initialCells[i] = {
      on: true,
      color: "#ffffff",
      tipo: "3",
      // id: i,
    };
    var valorTipo3 = gridInit3 + gridInit2;
  }
  if (i === valorTipo3) {
    initialCells[i] = {
      on: true,
      color: "#ffffff",
      tipo: "3",
      // id: i,
    };
    valorTipo3 = valorTipo3 + gridInit2;
  }

  //Para los triángulos tipo '4'
  if (i === gridInit4) {
    initialCells[i] = {
      on: true,
      color: "#ffffff",
      tipo: "4",
      // id: i,
    };
    var valorTipo4 = gridInit4 + gridInit1;
  }
  if (i === valorTipo4) {
    initialCells[i] = {
      on: true,
      color: "#ffffff",
      tipo: "4",
      // id: i,
    };
    valorTipo4 = valorTipo4 + gridInit1;
  }
}

function App() {
  const [currentColor, setCurrentColor] = useState("#5DC1B9");
  const [cells, setCells] = useState(initialCells);
  const classes = useStyles();
  
  // localStorage.setItem("colors",JSON.stringify(colores))

  return (
    <div className={classes.app}>
      <GloboPicker />
      <ColorPicker
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
    </div>
    
  );
}

export default App;
