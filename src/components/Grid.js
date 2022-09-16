import React from "react";
import useStyles from "./Grid.style";

export default function Grid({cells, setCells, currentColor}) {
  console.log(cells);
  const classes = useStyles();

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
    cellsToRender.push(<div id={i} className={tipoToClass(cells[i].tipo)} />);
  }

  const updateCell = (event) => {
    var id = event.target.id;
    var prueba = document.getElementById(id);
    // prueba.style.backgroundColor = currentColor;
    // prueba.style.borderRightColor = currentColor;
    prueba.style.setProperty("--customColor",currentColor)
  };

  return (
    <div>
      <div className={classes.container} onClick={updateCell}>
        {cellsToRender}
      </div>
      {/* <div id="742" className="triangle-left" onClick={updateCell}></div> */}

      {/* <div className={classes.container}> */}

      {/*Cojin 8pliegos ->2 columnas en Grid.style
                <div className={classes.triangletopleft}></div>
                <div className={classes.triangletopright}></div>
                <div className={classes.trianglebottomleft}></div>
                <div className={classes.trianglebottomright}></div> */}

      {/* Cojin 32pliegos ->4columnas en Grid.style
                <div className={classes.rectangle2}></div>
                <div className={classes.triangletopleft}></div>
                <div className={classes.triangletopright}></div>
                <div className={classes.rectangle2}></div>

                <div className={classes.triangletopleft}></div>
                <div className={classes.rectangle1}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.triangletopright}></div>

                <div className={classes.trianglebottomleft}></div>
                <div className={classes.rectangle1}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.trianglebottomright}></div>

                <div className={classes.rectangle2}></div>
                <div className={classes.trianglebottomleft}></div>
                <div className={classes.trianglebottomright}></div>
                <div className={classes.rectangle2}></div> */}

      {/* Cojin 72 */}
      {/* <div className={classes.rectangle2}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.triangletopleft}></div>
                <div className={classes.triangletopright}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.rectangle2}></div>

                <div className={classes.rectangle2}></div>
                <div className={classes.triangletopleft}></div>
                <div className={classes.rectangle1}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.triangletopright}></div>
                <div className={classes.rectangle2}></div>

                <div className={classes.triangletopleft}></div>
                <div className={classes.rectangle1}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.rectangle1}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.triangletopright}></div>


                <div className={classes.trianglebottomleft}></div>
                <div className={classes.rectangle1}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.rectangle1}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.trianglebottomright}></div>

                <div className={classes.rectangle2}></div>
                <div className={classes.trianglebottomleft}></div>
                <div className={classes.rectangle1}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.trianglebottomright}></div>
                <div className={classes.rectangle2}></div>

                <div className={classes.rectangle2}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.trianglebottomleft}></div>
                <div className={classes.trianglebottomright}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.rectangle2}></div> */}

      {/* Caja 16
                
                <div className={classes.triangletopleft}></div>
                <div className={classes.triangletopright}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.rectangle1}></div>
                <div className={classes.trianglebottomleft}></div>
                <div className={classes.trianglebottomright}></div> */}

      {/* </div> */}
    </div>
  );
}
