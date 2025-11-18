import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeFourth from './ThemeFourth';

function ThemeThird() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`theme-box ${theme}`}>
      <h2>Third Component</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemeFourth />
    </div>
  );
}

export default ThemeThird;
