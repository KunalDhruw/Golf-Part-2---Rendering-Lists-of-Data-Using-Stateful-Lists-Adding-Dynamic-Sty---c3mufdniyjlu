import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 39: // ArrowRight
        setX(x + 5);
        break;
      case 37: // ArrowLeft
        setX(x - 5);
        break;
      case 38: // ArrowUp
        setY(y - 5);
        break;
      case 40: // ArrowDown
        setY(y + 5);
        break;
    }
    setBallPosition({ left: `${x}px`, top: `${y}px` });
  };

  const start = () => {
    setRenderBall(true);
  };

  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({ left: "0px", top: "0px" });
  };

  const renderChoice = () => {
    if (!renderBall) {
      return (
        <button onClick={start} className="start ballProvider">
          Start
        </button>
      );
    } else {
      return <div className="ball" style={ballPosition}></div>;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="playground">
      <button onClick={reset} className="reset ballProvider">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
