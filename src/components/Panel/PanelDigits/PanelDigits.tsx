import React, { FC } from 'react';
import ButtonCircle from '../ButtonCircle/ButtonCircle';
import s from './PanelDigits.module.scss';

export interface PanelInternalProps {
  panelAction: any;
}

const PanelDigits:FC<PanelInternalProps> = ({
  panelAction,
}) => {
  const arrDigits = Array.from(Array(9).keys());

  return (
    <div className={s.panelContainer}>
      {
        arrDigits.map(digit => (
          <ButtonCircle 
            key={`digit-${digit}`}
            label={<p className={s.btnDigit}>{digit}</p>} 
            onClick={() => panelAction(digit)}
          />
        ))
      }
      <div />
      <ButtonCircle 
        label={<p className={s.btnDigit}>9</p>} 
        onClick={() => panelAction(9)}
      />
    </div>
  );
};

export default PanelDigits;