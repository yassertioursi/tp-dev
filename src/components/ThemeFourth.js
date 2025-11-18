import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeFourth() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`theme-box ${theme}`}>
      <h2>Fourth Component</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeFourth;
