import React, { FC } from 'react';
import Display from '../Display/Display';
import s from './DisplayHeader.module.scss';

export interface DisplayHeaderProps {
    elevatorList: any[];
}

const DisplayHeader:FC<DisplayHeaderProps> = ({
  elevatorList,
}) => (
  <div className={s.diplayHeader}>
    <div/>
    {elevatorList.map((elevator, index) => (
      <>   
        <Display
          data={{
            currentFloor: 0,
            direction: 'UP',
          }}
        />
        <div/>
      </>
    ))}
  </div>
);

export default DisplayHeader;