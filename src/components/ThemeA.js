import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeA() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`theme-box ${theme}`}>
      <h2>Theme A</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeA;
