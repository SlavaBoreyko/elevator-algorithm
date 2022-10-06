import React, { FC } from 'react';
import s from './PanelTopDown.module.scss';
import ButtonCircle from '../ButtonCircle/ButtonCircle';
import ArrowUP from '../ArrowUP/ArrowUP';
import ArrowDOWN from '../ArrowDOWN/ArrowDOWN';

export interface PanelProps {
  floor: number;
  onClick: any;
}

const PanelTopDown: FC<PanelProps> = ({
  floor,
  onClick
}) => (
  <div className={s.panel}>
    <div className={s.btnContainer}>
      <ButtonCircle 
        label={<ArrowUP/>}
        onClick={() => onClick({currentFloor: floor, direction: 'UP'}) }
      />
    </div>
    <div className={s.btnContainer}>
      <ButtonCircle 
        label={<ArrowDOWN/>}
        onClick={() => onClick({currentFloor: floor, direction: 'DOWN'}) }
      />
    </div>
  </div>
);

export default PanelTopDown;