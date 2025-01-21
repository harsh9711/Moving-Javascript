import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState("");
  let newDirection = "";
  const handleClick = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e;
    newDirection = clientX > position.x ? "right" : "left";

    setDirection(newDirection);

    setPosition({ x: clientX, y: clientY });
  };
  return (
    <div className="container" onClick={handleClick}>
      <img
        src="/logo.gif"
        alt="Logo"
        className={`logo ${direction}`}
        style={{
          transform: `translate(${position.x - 50}px, ${position.y - 50}px) ${
            direction === "right" ? "scaleX(-1)" : ""
          }`,
        }}
      />
    </div>
  );
};

export default App;
