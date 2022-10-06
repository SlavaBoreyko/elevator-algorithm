import React, { FC } from 'react';
import { dataDestination } from '../../types/elevator.types';
import { switchArrowComponent } from '../helpers/useArrowUpDown';
import s from './Display.module.scss';

export interface DisplayProps {
  data: dataDestination | dataDestination[];
}

const Display:FC<DisplayProps> = ({
  data
}) => (
  <>
    {(!Array.isArray(data)) ? (
      <div className={s.displayScreen}>
        <span>{data.currentFloor}</span>
        {(data.direction) && (
          <div className={s.arrowContainer}>
            {switchArrowComponent(data.direction)}
          </div>
        )}
        <span>{data.nextFloor}</span>
      </div>
    ) : (
      <div className={`${s.displayScreen} ${s.flexStart}`}>
        {data.map((dataItem, index) => (
          <div className={s.dataItem} key={`dataQueue-${index}`}>
            <span>{dataItem.currentFloor}</span>
            <div className={s.arrowContainer}>
              {switchArrowComponent(dataItem.direction)}
            </div>
          </div>
        ))}
      </div>
    )}
  </>
);
export default Display;