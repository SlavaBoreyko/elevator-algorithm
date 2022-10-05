import React, { FC } from 'react';
import ElevatorBox from '../Elevator/ElevatorBox/ElevatorBox';
import ElevatorDoorFrame from '../Elevator/ElevatorDoorFrame/ElevatorDoorFrame';
import ElevatorShaft from '../Elevator/ElevatorShaft/ElevatorShaft';
import Floor from '../Floor/Floor';
import s from './Building.module.scss';

export interface BuildingProps {
    floorsAmount: number;
    elevatorsAmount: number;
}

const Building:FC<BuildingProps> = ({
  floorsAmount = 4,
  elevatorsAmount = 6,
}) => {
  const arrFloors = Array.from(Array(floorsAmount).keys());
  // We need 2x array for access 
  const arrElevator = Array.from(Array(elevatorsAmount).keys());
  return (
    <div className={s.buildingContainer}>
      {arrFloors.map((floor, index) => (
        <Floor 
          floor={index}
          evelatorsAmount={elevatorsAmount}>
          {arrElevator.map((elevator, index) => (
            <>   
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
  );
};

export default Building;