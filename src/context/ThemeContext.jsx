import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

// 1. Create the context
const ThemeContext = createContext(null);

// 2. Create the provider component
export const ThemeProvider = ({ children }) => {
  // Function to get the initial theme
  const getInitialTheme = () => {
    // Check for a saved theme in localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }

      // Check for user's OS preference
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }
    // Default to light theme
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // 3. Effect to apply the theme class and save to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('color-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// 4. Create a custom hook for easy access to the context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};