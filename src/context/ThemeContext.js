"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Function to determine theme based on time
  const getTimeBasedTheme = () => {
    if (typeof window === 'undefined') return 'light';
    const hour = new Date().getHours();
    // Dark mode from 6 PM (18:00) to 6 AM (6:00)
    return (hour >= 18 || hour < 6) ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState('light');
  const [isManual, setIsManual] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or time-based default after component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedManual = localStorage.getItem('themeManual') === 'true';
    
    setIsManual(savedManual);
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const autoTheme = getTimeBasedTheme();
      setTheme(autoTheme);
    }
    setMounted(true);
  }, []);

  // Toggle theme manually
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      localStorage.setItem('themeManual', 'true');
      setIsManual(true);
      return newTheme;
    });
  };

  // Reset to auto mode (time-based)
  const resetToAuto = () => {
    localStorage.removeItem('themeManual');
    setIsManual(false);
    const autoTheme = getTimeBasedTheme();
    setTheme(autoTheme);
    localStorage.setItem('theme', autoTheme);
  };

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  // Auto-update theme based on time if not manually set
  useEffect(() => {
    if (mounted && !isManual) {
      const interval = setInterval(() => {
        const autoTheme = getTimeBasedTheme();
        if (autoTheme !== theme) {
          setTheme(autoTheme);
        }
      }, 60000); // Check every minute

      return () => clearInterval(interval);
    }
  }, [theme, isManual, mounted]);

  const value = {
    theme,
    toggleTheme,
    resetToAuto,
    isManual,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
