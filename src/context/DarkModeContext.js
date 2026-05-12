import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

function DarkModeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("ThemeContext was used outside DarkModeProvider");

  return context;
}

export { DarkModeProvider, useDarkMode };
