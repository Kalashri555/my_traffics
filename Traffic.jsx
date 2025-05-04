import React, { useEffect, useState } from 'react';
import './Traffic.css';

function Traffic() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prevLight) => {
        if (prevLight === "red") return "yellow";
        if (prevLight === "yellow") return "green";
        return "red";
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="traffic-light">
        <div className={`light red ${light === 'red' ? 'active' : ''}`}></div>
        <div className={`light yellow ${light === 'yellow' ? 'active' : ''}`}></div>
        <div className={`light green ${light === 'green' ? 'active' : ''}`}></div>
      </div>
    </div>
  );
}

export default Traffic;

