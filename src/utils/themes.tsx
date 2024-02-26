import { useEffect, useState } from "react";
export default function useTheme() {
  const [isThemeReady, setIsThemeReady] = useState(false);
  const themBaseConst = "@ThemeCanadaProject";
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const key = localStorage.getItem(themBaseConst);
    if (key) {
      localStorage.setItem(themBaseConst, key);
      setTheme(key);
    } else {
      localStorage.setItem(themBaseConst, "dark");
      setTheme("dark");
    }
    setIsThemeReady(true);
  }, []);
  const toggleTheme = () => {
    const key = localStorage.getItem(themBaseConst);
    const newTheme = key == "dark" ? "light" : "dark";
    localStorage.setItem(themBaseConst, newTheme);
    setTheme(newTheme);
  };
  return {
    theme,
    toggleTheme,
    isThemeReady,
  };
}
