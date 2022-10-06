import React, { FC } from 'react';
import PanelDigits from '../../Panel/PanelDigits/PanelDigits';
import ElevatorDoor from '../ElevatorDoor/ElevatorDoor';
import s from './ElevatorDoorFrame.module.scss';

export interface ElevatorDoorFrameProps {
  open: boolean;
  panelAction: any;
}

const ElevatorDoorFrame: FC<ElevatorDoorFrameProps> = ({
  open,
  panelAction,
}) => (
  <div className={s.elevatorDoorFrame}>
    <ElevatorDoor />
    <div style={{
      width: `${open ? '7rem' : '0.1rem'}`,
      transition: 'all 1s',
    }}>
      <PanelDigits panelAction={panelAction}/>
    </div>
    <ElevatorDoor />
  </div>
);

export default ElevatorDoorFrame;