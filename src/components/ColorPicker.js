import React from "react";

const ColorPicker = ({ currentColor, setCurrentColor }) => {
  const colorChange = (event) => {
    setCurrentColor(event.target.value);
  };
  return (
    <div>
      <input
        className="colorPicker"
        type="color"
        value={currentColor}
        onChange={colorChange}
      />
    </div>
  );
};

export default ColorPicker;
