import React, {FC, ReactNode} from 'react';
import PanelTopDown from '../Panel';
import s from './Floor.module.scss';

export interface FloorProps {
    evelatorsAmount: number;
    children?: ReactNode;
    floor: number;
    onClick: any;
}

const Floor:FC<FloorProps> = ({
  evelatorsAmount,
  children,
  floor,
  onClick,
}) => {
  const root = document.documentElement;
  root?.style.setProperty("--elevators-amount", evelatorsAmount.toString());

  return (
    <div className={s.wall}>
        
      <div className={s.panelCenter}>
        <p className={s.numFloor}>{floor}</p>
        <PanelTopDown 
          floor={floor}
          onClick={onClick}
        />
      </div>
      {children}
    </div>
  );
};

export default Floor;