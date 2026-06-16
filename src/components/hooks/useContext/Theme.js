import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function Theme() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      <Toolbar />
    </ThemeContext>
  );
}

function Toolbar() {
  return (
    <div>
      <h3>From Toolbar Toggle theme</h3>
      <ToogleTheme />
    </div>
  );
}

function ToogleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default Theme;
