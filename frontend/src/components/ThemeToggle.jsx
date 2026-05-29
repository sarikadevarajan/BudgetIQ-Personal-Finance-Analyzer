import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function ThemeToggle() {

  const {
    darkMode,
    toggleTheme
  } = useContext(ThemeContext);

  return (

    <button
      onClick={toggleTheme}
      style={{
        border: "none",
        padding: "12px 20px",
        borderRadius: "30px",
        cursor: "pointer",
        background: darkMode
          ? "#7C3AED"
          : "#8B5CF6",
        color: "white",
        fontWeight: "bold"
      }}
    >

      {darkMode ? (
        <>
          <LightModeIcon />
          Light Mode
        </>
      ) : (
        <>
          <DarkModeIcon />
          Dark Mode
        </>
      )}

    </button>

  );
}

export default ThemeToggle;