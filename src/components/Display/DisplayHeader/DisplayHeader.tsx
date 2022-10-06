import React, { FC } from 'react';
import { elevatorStatesType } from '../../Building/Building';
import Display from '../Display/Display';
import s from './DisplayHeader.module.scss';

export interface DisplayHeaderProps {
    elevatorList: elevatorStatesType[];
}

const DisplayHeader:FC<DisplayHeaderProps> = ({
  elevatorList,
}) => (
  <div className={s.diplayHeader}>
    <div/>
    {elevatorList.map((elevator, index) => (
      <>   
        <Display
          key={`display-${index}`}
          data={{
            currentFloor: elevator.currentFloor,
            direction: elevator.direction,
            nextFloor: elevator.nextFloor && ((elevator.nextFloor < 0 ) ? undefined : elevator.nextFloor),
          }}
        />
        <div key={`div-display-${index}`}/>
      </>
    ))}
  </div>
);

export default DisplayHeader;