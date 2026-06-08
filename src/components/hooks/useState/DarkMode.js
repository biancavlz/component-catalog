import { useState } from "react";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>{isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default DarkMode;
