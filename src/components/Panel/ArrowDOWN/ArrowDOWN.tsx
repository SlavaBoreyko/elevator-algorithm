import React, { FC } from 'react';
import s from './ArrowDOWN.module.scss';

export interface ArrowProps {
  green?: boolean;
}

const ArrowDOWN:FC<ArrowProps> = ({green}) => (
  <div className={s.arrowContainer}>
    <div 
      className={s.arrow}
      style={green ? {
        backgroundColor: '#A7FF8E',
      } : {}}
    ></div>
  </div>
);

export default ArrowDOWN;