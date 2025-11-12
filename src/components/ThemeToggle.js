import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Currently ${theme} mode - Click to toggle`}
    >
      {isDark ? (
        <FiSun className="theme-icon sun-icon" />
      ) : (
        <FiMoon className="theme-icon moon-icon" />
      )}
    </button>
  );
};

export default ThemeToggle;
