import React, { FC, useEffect, useState } from 'react';
import DisplayHeader from '../Display/DisplayHeader/DisplayHeader';
import AdminPanelFooter from '../Panel/AdminPanelFooter/AdminPanelFooter';
import ElevatorBox from '../Elevator/ElevatorBox/ElevatorBox';
import ElevatorDoorFrame from '../Elevator/ElevatorDoorFrame/ElevatorDoorFrame';
import ElevatorShaft from '../Elevator/ElevatorShaft/ElevatorShaft';
import Floor from '../Floor/Floor';
import { dataDestination } from '../types/elevator.types';
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
    floor: number;
    state: ElevatorState;
    destination: number | undefined;
}

const Building:FC<BuildingProps> = ({
  floorsAmount = 4,
  elevatorsAmount = 6,
}) => {
  let arrFloors = Array.from(Array(floorsAmount).keys());
  arrFloors.reverse(); 
  const arrElevator = Array.from(Array(elevatorsAmount).keys());
  const [elevatorStates, setElevatorStates] = useState<elevatorStatesType[]>([]);
  useEffect(() => {
    let arr:elevatorStatesType[]  = [];
    arrElevator.forEach((elevatorId) => {
      arr.push(
        {
          id: elevatorId,
          floor: 0,
          state: ElevatorState.STOP, // Maybe just by destination: undefined,
          destination: undefined,
        }
      );
    });
    setElevatorStates(arr);
  }, []);


  const [listPiskUp, setListPiskUp] = useState<dataDestination[]>([]);
  const AddPickUp = (pickup: dataDestination) => {
    setListPiskUp([...listPiskUp, pickup]);
  };
  console.log(listPiskUp);
  
  return (
    <>
      <div className={s.buildingContainer}>
        <DisplayHeader elevatorList={arrElevator}/>
        {arrFloors.map((floor) => (
          <Floor 
            floor={floor}
            evelatorsAmount={elevatorsAmount}
            onClick={AddPickUp}
          >
            {arrElevator.map((elevator, index) => (
              <>   
                {/* if state === STAY then open = true */}
                <ElevatorDoorFrame open={false}/>
                <div/>
              </>
            ))}
          </Floor>
        ))}

        <ElevatorShaft evelatorsAmount={elevatorsAmount} >
          {arrElevator.map((elevator, index) => (
            <ElevatorBox />
          ))}
        </ElevatorShaft >
      
      </div>
      <AdminPanelFooter 
        dataPickUps={listPiskUp}
      />
    </>
  );
};

export default Building;