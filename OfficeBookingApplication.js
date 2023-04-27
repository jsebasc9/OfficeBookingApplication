import React, { useState } from "react";
import background from "./mapoffice.png";
import "./styles.css";

export default function App() {
  const [isChecked, setIsChecked] = useState(Array(40).fill(false));

  const handleCheckboxChange = (index) => {
    const newChecked = [...isChecked];
    newChecked[index] = !isChecked[index];
    setIsChecked(newChecked);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        margin: "20px",
        width: "80vw", // Increase the size of the container
        height: "80vh"
      }}
    >
      <div className="Section1">
        {Array.from({ length: 7 }, (_, i) => {
          const label = i + 1;
          return (
            <label key={i} style={{ display: "block", marginBottom: "5px" }}>
              {label}
              <input
                type="checkbox"
                checked={isChecked[i]}
                onChange={() => handleCheckboxChange(i)}
                className={`checkbox-${i}`} // Add class name here
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
