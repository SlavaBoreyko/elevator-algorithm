import React, { FC, useEffect, useState } from 'react';
import DisplayHeader from '../Display/DisplayHeader/DisplayHeader';
import AdminPanelFooter from '../Panel/AdminPanelFooter/AdminPanelFooter';
import ElevatorBox from '../Elevator/ElevatorBox/ElevatorBox';
import ElevatorDoorFrame from '../Elevator/ElevatorDoorFrame/ElevatorDoorFrame';
import ElevatorShaft from '../Elevator/ElevatorShaft/ElevatorShaft';
import Floor from '../Floor/Floor';
import { dataDestination, DirectionPickUp } from '../types/elevator.types';
import s from './Building.module.scss';

export interface BuildingProps {
    floorsAmount: number;
    elevatorsAmount: number;
}

export enum ElevatorState {
    MOVING = 'MOVING',
    STOP = 'STOP',
}

export interface elevatorStatesType {
    id: number;
    currentFloor: number;
    state: ElevatorState;
    direction: DirectionPickUp | undefined;
    nextFloor: number | undefined;
}

const Building:FC<BuildingProps> = ({
  floorsAmount,
  elevatorsAmount,
}) => {
  let arrFloors = Array.from(Array(floorsAmount).keys());
  arrFloors.reverse(); 
  const arrElevator = Array.from(Array(elevatorsAmount).keys());
  const [elevatorStates, setElevatorStates] = useState<elevatorStatesType[]>([]);
  const [doorStates, setDoorStates] = useState<any[]>(
    Array.from({ length: floorsAmount }, () => 
      Array.from({ length: elevatorsAmount }, () => false))
  );
  const [serveOne, setServeOne] = useState<boolean>(false);

  const [listPiskUp, setListPiskUp] = useState<dataDestination[]>([]);

  //   hook for INIT  
  useEffect(() => {
    let arr:elevatorStatesType[]  = [];
    arrElevator.forEach((elevatorId) => {
      arr.push(
        {
          id: elevatorId,
          currentFloor: 0,
          state: ElevatorState.STOP, // Maybe just by destination: undefined,
          direction: undefined,
          nextFloor: -1,
        }
      );
    });
    setElevatorStates(arr);
  }, []);


  const setPiskUpToElevator = () => {
    if(listPiskUp.length > 0) {
      let newListPickUp: dataDestination[] = [...listPiskUp];
      const firstPickUp = newListPickUp.shift();

      let newElevatorStates:elevatorStatesType[] = [...elevatorStates];
      newElevatorStates[0].nextFloor = firstPickUp?.currentFloor;

      const diff = newElevatorStates[0].nextFloor! - elevatorStates[0].currentFloor;
      
      if(diff > 0) {
        newElevatorStates[0].direction = DirectionPickUp.UP;
      } else if(diff <= 0) {
        newElevatorStates[0].direction = DirectionPickUp.DOWN;
      }
      setElevatorStates(newElevatorStates);
      setServeOne(false);
      setListPiskUp(newListPickUp);
    } else {
      let newElevatorStates:elevatorStatesType[] = [...elevatorStates];
      newElevatorStates[0].nextFloor = -1;
      setElevatorStates(newElevatorStates);
    }
  };

  const openDoorById = (doorFloor: number, doorElevator:number) => {
    let newDoorStates = [...doorStates];
    newDoorStates[doorFloor][doorElevator] = true;
    setDoorStates(newDoorStates);
  };
  const closeDoorById = (doorFloor: number, doorElevator:number) => {
    let newDoorStates = [...doorStates];
    newDoorStates[doorFloor][doorElevator] = false;
    setDoorStates(newDoorStates);
  };

  //   stepElevator,  goToFloor 

  const stepElevator = (elevatorId: number) => {
    if(elevatorStates[0].nextFloor === -1) setPiskUpToElevator();

    if(elevatorStates[0].nextFloor! >= 0) {
      let diffFloors;
      // if(elevatorStates[0].nextFloor === undefined) diffFloors = elevatorStates[0].currentFloor * -1;
      diffFloors = elevatorStates[0].nextFloor! - elevatorStates[0].currentFloor;

      console.log('elevatorStates[0].nextFloor!',elevatorStates[0].nextFloor!);
      console.log('stepElevator > diffFloors ',diffFloors);
    
      let directionUpDown = 0;
      if (diffFloors > 0) directionUpDown = 1; 
      else if (diffFloors < 0) directionUpDown = -1; 
      else directionUpDown = 0; 

      if(diffFloors !== 0) {
        const newCurrentFloor = elevatorStates[0].currentFloor + directionUpDown; // +n -n
        let newElevatorStates:elevatorStatesType[] = [...elevatorStates];
        newElevatorStates[0].currentFloor = newCurrentFloor;
        setElevatorStates(newElevatorStates);
      } else if (diffFloors === 0) {
        openDoorById(elevatorStates[0].currentFloor, 0);
        if(serveOne) {
          setTimeout(()=> closeDoorById(elevatorStates[0].currentFloor, 0), 1000);
          setPiskUpToElevator();
        }
      }
    }
  };

  const addPickUp = (pickup: dataDestination) => {
    setListPiskUp([...listPiskUp, pickup]);
  };

  const goToFloor = (nextFloor: number) => {
    let newElevatorStates:elevatorStatesType[] = [...elevatorStates];
    newElevatorStates[0].nextFloor = nextFloor ? nextFloor : 0;
    console.log('newElevatorStates[0].nextFloor', newElevatorStates[0].nextFloor);
    
    const diff = nextFloor - elevatorStates[0].currentFloor;
    if(diff > 0) {
      newElevatorStates[0].direction = DirectionPickUp.UP;
    } else if(diff <= 0) {
      newElevatorStates[0].direction = DirectionPickUp.DOWN;
    }
    setElevatorStates(newElevatorStates);
    closeDoorById(elevatorStates[0].currentFloor, 0);
    setServeOne(true);
  };
  
  return (
    <>
      <div className={s.buildingContainer}>
        <DisplayHeader elevatorList={elevatorStates}/>
        {arrFloors.map((floor) => (
          <Floor 
            key={`floor-${floor}`}
            floor={floor}
            evelatorsAmount={elevatorsAmount}
            onClick={addPickUp}
          >
            {arrElevator.map((elevator) => (
              <>   
                <ElevatorDoorFrame 
                  key={`elevator-${elevator}`}
                  open={doorStates[floor][elevator]}
                  panelAction={goToFloor}
                />
                <div key={`div-elevator-${elevator}`}/>
              </>
            ))}
          </Floor>
        ))}
        <ElevatorShaft>
          {elevatorStates.map((elevator) => (
            <ElevatorBox 
              key={`elevatorbox-${elevator.id}`}
              currentFloor={elevator.currentFloor}
            />
          ))}
        </ElevatorShaft >
      
      </div>
      <AdminPanelFooter 
        dataPickUps={listPiskUp}
        playAction={() => {}}
        stepAction={stepElevator}
      />
    </>
  );
};

export default Building;