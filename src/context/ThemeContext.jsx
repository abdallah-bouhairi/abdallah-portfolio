import { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext(null);
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => { document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'; }, [darkMode]);
  return <ThemeContext.Provider value={{ darkMode, toggleTheme: () => setDarkMode(v => !v) }}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
