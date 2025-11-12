# Dark/Light Mode Implementation

## Features

### 🌓 Auto-Detection Based on Time

- **Dark Mode**: Automatically activates between **6 PM (18:00)** and **6 AM (6:00)**
- **Light Mode**: Automatically activates between **6 AM (6:00)** and **6 PM (18:00)**
- Checks every minute to update theme if in auto mode

### 🎨 Manual Toggle

- Click the sun/moon icon in the navbar to manually switch themes
- Manual selection is saved and persists across sessions
- Manual mode overrides automatic time-based switching

### 💾 Persistence

- Theme preference is saved in `localStorage`
- Returns to your last selected theme when you revisit
- Separate flag for manual vs auto mode

## How It Works

### ThemeContext (`src/context/ThemeContext.js`)

- Provides theme state and controls throughout the app
- `useTheme()` hook to access theme anywhere in components
- Functions:
  - `toggleTheme()` - Switch between light/dark manually
  - `resetToAuto()` - Return to automatic time-based mode
  - `isManual` - Check if user manually set theme
  - `isDark` - Quick check if dark mode is active

### ThemeToggle Component (`src/components/ThemeToggle.js`)

- Beautiful animated button in navbar
- Shows sun icon (☀️) in dark mode → click to switch to light
- Shows moon icon (🌙) in light mode → click to switch to dark
- Smooth rotation/pulse animations

### CSS Variables (`src/App.css`)

The following CSS variables automatically update based on theme:

**Light Mode:**

- `--bg-primary`: #ffffff (white)
- `--bg-secondary`: #f8fafc (light gray)
- `--text-primary`: #1e293b (dark text)
- `--text-secondary`: #64748b (medium gray)
- `--card-bg`: #ffffff
- `--border-color`: #e2e8f0
- `--shadow`: rgba(0, 0, 0, 0.1)

**Dark Mode:**

- `--bg-primary`: #0f172a (dark blue-black)
- `--bg-secondary`: #1e293b (medium dark)
- `--text-primary`: #f1f5f9 (light text)
- `--text-secondary`: #cbd5e1 (medium light)
- `--card-bg`: #1e293b
- `--border-color`: #334155
- `--shadow`: rgba(0, 0, 0, 0.3)

## Usage

The theme is automatically available everywhere in your app!

```javascript
import { useTheme } from "../context/ThemeContext";

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

## Customization

### Change Auto-Switch Times

Edit `getTimeBasedTheme()` in `src/context/ThemeContext.js`:

```javascript
const getTimeBasedTheme = () => {
  const hour = new Date().getHours();
  // Change these hours as needed
  return hour >= 18 || hour < 6 ? "dark" : "light";
};
```

### Add More CSS Variables

Add to `:root` and `[data-theme="dark"]` in `src/App.css`:

```css
:root {
  --my-custom-color: #123456;
}

[data-theme="dark"] {
  --my-custom-color: #654321;
}
```

### Style Your Components

Use the CSS variables in any stylesheet:

```css
.my-element {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}
```

## Browser Support

- ✅ All modern browsers
- ✅ localStorage support required
- ✅ CSS custom properties (variables) support required

## Testing

1. Visit site during daytime (6 AM - 6 PM) → Should be light mode
2. Visit site during nighttime (6 PM - 6 AM) → Should be dark mode
3. Click theme toggle → Should switch modes
4. Refresh page → Should remember your choice
5. Wait across the hour boundary → Should auto-update if in auto mode

Enjoy your new dark mode! 🌙✨
