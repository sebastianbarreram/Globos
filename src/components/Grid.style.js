import { createUseStyles } from "react-jss";

export default createUseStyles({
  container: {
    display: "grid",
    // gridTemplateColumns: '100px 100px 100px 100px 100px 100px',
    gridTemplateColumns: "100px ".repeat(sessionStorage.getItem("cuadricula")),
    gridGap: "0",
  },
  trianglebottomleft: {
    width: "0",
    height: "0",
    borderRight: "50px solid #000000",
    borderTop: "75px solid #000000",
    borderLeft: "50px solid transparent",
    borderBottom: "75px solid transparent",
    position: "relative",
    // cursor: "pointer",
    // transition: "all 200ms linear",
    // "&:hover": {
    //   transform: "scale(1.1)",
    // },
    "&:after": {
      content: '""',
      width: "0",
      height: "0",
      borderRight: "46px solid #f0ad4e",
      borderTop: "71px solid #f0ad4e",
      borderLeft: "46px solid transparent",
      borderBottom: "71px solid transparent",
      position: "absolute",
      top: "-75px",
      left: "-44px",
    },
  },
  trianglebottomright: {
    width: "0",
    height: "0",
    // border: '50px solid transparent',
    borderWidth: "150px 100px 0 0",
    border: " solid transparent",
    borderTopColor: " #a7c8eb",
    borderLeftColor: " #a7c8eb",
  },
  triangletopleft: {
    width: "0",
    height: "0",
    borderWidth: "0 0 150px 100px",
    border: " solid transparent",
    borderBottomColor: " #a7c8eb",
    borderRightColor: " #a7c8eb",
  },
  triangletopright: {
    width: "0",
    height: "0",
    borderWidth: "150px 0 0 100px",
    border: " solid transparent",

    borderBottomColor: " #007bff",
    borderLeftColor: " #007bff",
  },
  rectangle1: {
    height: "150px",
    width: "100px",
    background: "#18cc08",
    border: "2px solid black",
  },
  rectangle2: {
    height: "150px",
    width: "100px",
    background: "ffffff",
    border: "2px solid black",
  },
});
