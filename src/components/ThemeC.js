import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeC() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`theme-box ${theme}`}>
      <h2>Theme C</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeC;
