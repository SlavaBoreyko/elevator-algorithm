import React from 'react';
import ButtonCircle from '../ButtonCircle/ButtonCircle';
import s from './PanelDigits.module.scss';

const PanelInternal = () => {
  const arrDigits = Array.from(Array(9).keys());

  return (
    <div className={s.panelContainer}>
      {
        arrDigits.map(digit => (
          <ButtonCircle 
            label={<p className={s.btnDigit}>{digit}</p>} 
          />
        ))
      }
      <div />
      <ButtonCircle label={<p className={s.btnDigit}>9</p>} />
    </div>
  );
};

export default PanelInternal;