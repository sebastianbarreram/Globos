import { createUseStyles } from "react-jss";

export default createUseStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    minWidth: "fit-content",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    padding:"2em"
    // margin: "auto",
  },
  //   colorSwatchContainer: {
  //     display: 'flex',
  //   },
  //   colorSwatch: {
  //     margin: '0.5rem',
  //     padding: 0,
  //     width: '25px',
  //     height: '25px',
  //     outline: 'none',
  //     border: 'none',
  //     cursor: 'pointer',
  //   },
  //   chatString: {
  //     maxWidth: '80%',
  //     fontFamily: 'monospace',
  //     wordWrap: 'break-word',
  //   },
});
