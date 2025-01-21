import { useState } from "react";
import "./App.css";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState("");
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = (e: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = e;
    const newDirection = clientX > position.x ? "right" : "left";

    setDirection(newDirection);
    setIsRotating(true);

    setTimeout(() => {
      setPosition({ x: clientX, y: clientY });
      setIsRotating(false);
    }, 1000);
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
          transition: isRotating ? "transform 1s" : "transform 6s",
        }}
      />
    </div>
  );
};

export default App;
