import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeThird from './ThemeThird';

function ThemeSecond() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`theme-box ${theme}`}>
      <h2>Second Component</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemeThird />
    </div>
  );
}

export default ThemeSecond;
