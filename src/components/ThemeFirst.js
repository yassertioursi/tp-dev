import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeSecond from './ThemeSecond';

function ThemeFirst() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`theme-box ${theme}`}>
      <h2>First Component</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemeSecond />
    </div>
  );
}

export default ThemeFirst;
