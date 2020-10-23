import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import NewTask from './components/NewTask';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <h1>Hiii</h1>
      <NewTask addNote={alert} />
    </ThemeProvider>
  );
}

export default App;