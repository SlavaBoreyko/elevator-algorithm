import React, { FC } from 'react';
import s from './PanelTopDown.module.scss';
import ButtonCircle from '../ButtonCircle/ButtonCircle';
import ArrowUP from '../ArrowUP/ArrowUP';
import ArrowDOWN from '../ArrowDOWN/ArrowDOWN';

export interface PanelProps {
  floor: number;
}

const PanelTopDown: FC<PanelProps> = ({
  floor
}) => (
  <div className={s.panel}>
    <div className={s.btnContainer}>
      <ButtonCircle label={<ArrowUP/>}/>
    </div>
    <div className={s.btnContainer}>
      <ButtonCircle label={<ArrowDOWN/>}/>
    </div>
  </div>
);

export default PanelTopDown;