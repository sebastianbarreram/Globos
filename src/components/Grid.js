import React from 'react';
import useStyles from './Grid.style';

// const offCell = {
//     on: false,
//     color: '#ffffff',
//     tipo: '0'
// };


export default function Grid(cells, setCells, currentColor) {
    console.log('cells de grid', cells.cells)
    const classes = useStyles();
    // const celdas = sessionStorage.getItem('cells')

    function tipoToClass(tipo) {
        var tipoClass = '';
        if (tipo === '1') {
            tipoClass = classes.triangletopleft;
        }
        else if (tipo === '2') {
            tipoClass = classes.triangletopright;
        }
        else if (tipo === '3') {
            tipoClass = classes.trianglebottomleft;
        }
        else if (tipo === '4') {
            tipoClass = classes.trianglebottomright;
        }
        else if (tipo === '0') {
            tipoClass = classes.rectangle2;
        }
        return tipoClass;
    }

    let array = [];
    let array2 = [];
    for (var i = 0; i < cells.cells.length; i++) {
        array.push(
            // <div className={classes.tipoToClass(initialCells[i].tipo)} />)
            <div key={i}>{tipoToClass(cells.cells[i].tipo)}</div>
        )

            //array2 es el array que muestra la cuadrícula
        array2.push(
            <div key={i} className={tipoToClass(cells.cells[i].tipo)} />
        )
    }
    console.log('array',array)
    console.log('array2',array2)
    console.log(array===array2)

    const updateCell = (event) =>{
            console.log(event)
            //setCells(cells.map((cell, cellIndex)))
            console.log(event.target.index)
    }




    return (
        <div>

            <div className={classes.container} onClick={updateCell}>
                {array2}
            </div>

            <div className={classes.container}>

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




            </div>

        </div>
    )
}
