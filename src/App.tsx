import React from 'react';
import Building from './components/Building/Building';

function App() {
  const floorsAmount = 4;
  const elevatorsAmount = 4;
  return (
    <>
      <Building 
        floorsAmount={floorsAmount}
        elevatorsAmount={elevatorsAmount}
      />
    </>
  );
}

export default App;
