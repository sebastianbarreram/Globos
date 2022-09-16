import React from "react";
import useStyles from "./ColorPicker.styles";

const ColorPicker = ({ currentColor, setCurrentColor }) => {
  const classes = useStyles({ currentColor });
  const colorChange = (event) => {
    setCurrentColor(event.target.value);
  };
  return (
    <div>
      <input
        className={classes.colorPicker}
        type="color"
        value={currentColor}
        onChange={colorChange}
      />
    </div>
  );
};

export default ColorPicker;
