




import { useState, useContext, useEffect } from 'react';
import { ThemeProvider, ThemeContext } from './components/ThemeContext';
import ThemeA from './components/ThemeA';
import ThemeB from './components/ThemeB';
import ThemeC from './components/ThemeC';
import ThemeD from './components/ThemeD';


function ThemedApp() {
  const [page, setPage] = useState(1);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.background = '#222';
      document.body.style.color = '#fff';
    } else {
      document.body.style.background = '#fff';
      document.body.style.color = '#222';
    }
    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
    };
  }, [theme]);

  let content;
  if (page === 1) content = <ThemeA />;
  else if (page === 2) content = <ThemeB />;
  else if (page === 3) content = <ThemeC />;
  else content = <ThemeD />;

  return (
    <div className={`App ${theme}`} style={{ minHeight: '100vh' }}>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: 16, margin: '24px 0' }}>
        <button onClick={() => setPage(1)}>Theme A</button>
        <button onClick={() => setPage(2)}>Theme B</button>
        <button onClick={() => setPage(3)}>Theme C</button>
        <button onClick={() => setPage(4)}>Theme D</button>
      </nav>
      {content}
    </div>
  );
}


function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
