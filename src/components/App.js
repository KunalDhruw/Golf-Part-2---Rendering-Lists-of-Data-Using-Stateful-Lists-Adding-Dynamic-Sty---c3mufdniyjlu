import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });

  const setBall = () => {
    setRenderBall(true);
  };
  useEffect(() => {
    setBallPosition({ left: x, top: y });
  }, [x, y]);
  const handleEvent = (event) => {
    switch (event.keyCode) {
      case 37:
        setX((x) => x - 5);
        console.log(x, y);
        console.log(ballPosition);
        break;
      case 38:
        setY((y) => y - 5);
        console.log(x, y);
        console.log(ballPosition);
        break;
      case 39:
        setX((x) => x + 5);
        console.log(x, y);
        console.log(ballPosition);
        break;
      case 40:
        setY((y) => y + 5);
        console.log(x, y);
        console.log(ballPosition);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEvent);
  }, []);
  const reset = () => {
    setX((x) => 0);
    setY((y) => 0);
    setRenderBall(false);
  };

  const renderChoice = () => {
    if (renderBall) {
      return (
        <div
          className="ball"
          style={{
            left: ballPosition.left + "px",
            top: ballPosition.top + "px",
            position: "absolute",
          }}
        />
      );
    }

    return (
      <button
        className="start"
        style={{
          bottom: "50px",
          left: "450px",
          position: "absolute",
        }}
        onClick={setBall}
      >
        Start
      </button>
    );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
