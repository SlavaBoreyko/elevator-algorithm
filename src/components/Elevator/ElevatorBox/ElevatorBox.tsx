import React, { FC, useEffect, useRef } from 'react';
import s from './ElevatorBox.module.scss';

export interface ElevatorBoxProps {
    currentFloor: number;
}

const ElevatorBox:FC<ElevatorBoxProps> = ({
  currentFloor,
}) => {
  const refElevatorBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(refElevatorBox.current) {
      refElevatorBox.current.style.marginBottom = `${currentFloor*15}rem`;
    }
  }, [currentFloor, refElevatorBox.current]);

  return(
    <div ref={refElevatorBox} className={s.elevatorBox}></div>
  );};

export default ElevatorBox;