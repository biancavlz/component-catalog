import { useDarkMode } from "../../context/DarkModeContext";

function DarkModeButton() {
  const { theme, setTheme } = useDarkMode();

  return (
    <button
      style={{
        background: "#007bff",
        color: "#fff",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "0.25rem",
        cursor: "pointer",
      }}
      onClick={() => setTheme((t) => !t)}
    >
      Current theme: {theme ? "🌙" : "☀️"}
    </button>
  );
}

export default DarkModeButton;
