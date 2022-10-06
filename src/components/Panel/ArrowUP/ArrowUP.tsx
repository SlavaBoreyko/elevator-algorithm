import React, { FC } from 'react';
import { ArrowProps } from '../ArrowDOWN/ArrowDOWN';
import s from './ArrowUP.module.scss';

const ArrowUP:FC<ArrowProps> = ({green}) => (
  <div className={s.arrowContainer}>
    <div 
      className={s.arrow}
      style={green ? {
        backgroundColor: '#A7FF8E',
      } : {}}
    ></div>
  </div>
);

export default ArrowUP;