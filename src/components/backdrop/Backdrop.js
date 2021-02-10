import React from "react";

const Backdrop = ({ active, onToggle }) => {
  return (
    <div
      className={active ? "backdrop active" : "backdrop"}
      onClick={onToggle}
    />
  );
};

export default Backdrop;
