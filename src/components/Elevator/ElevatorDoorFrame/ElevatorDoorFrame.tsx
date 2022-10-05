import React, { FC, useEffect, useRef } from 'react';
import PanelDigits from '../../Panel/PanelDigits/PanelDigits';
import ElevatorDoor from '../ElevatorDoor/ElevatorDoor';
import s from './ElevatorDoorFrame.module.scss';

export interface ElevatorDoorFrameProps {
  open: boolean;
}

const ElevatorDoorFrame: FC<ElevatorDoorFrameProps> = ({
  open
}) => {
  const refDoor = useRef<HTMLDivElement>(null);
  // useEffect(()=>{
  //   if(refDoor.current) {
  //     open ? refDoor.current.classList.add(s.open) :
  //       refDoor.current.classList.remove(s.open);
  //   }
  // }, [open]);
    
  return (
    <div ref={refDoor} className={s.elevatorDoorFrame}>
      <ElevatorDoor />
      <div>
        {open ? <PanelDigits /> : null}
      </div>
      <ElevatorDoor />
    </div>
  );
};

export default ElevatorDoorFrame;