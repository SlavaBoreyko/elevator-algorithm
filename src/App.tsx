import React from 'react';
import Building from './components/Building/Building';
import ElevatorDoorFrame from './components/Elevator/ElevatorDoorFrame/ElevatorDoorFrame';
import Floor from './components/Floor/Floor';

function App() {
  const floorsAmount = 3;
  const elevatorsAmount = 6;
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
