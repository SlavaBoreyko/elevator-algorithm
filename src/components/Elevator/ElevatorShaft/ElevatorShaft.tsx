import React, { FC, ReactNode } from 'react';
import s from './ElevatorShaft.module.scss';

export interface ElevatorShaftProps {
    evelatorsAmount: number;
    children?: ReactNode;
}

const ElevatorShaft:FC<ElevatorShaftProps> = ({
  evelatorsAmount,
  children,
}) => {
  const arrElevatorShafts = Array.from(Array(evelatorsAmount).keys());

  return (
    <div className={s.elevatatorShaftsContainer}>
      {
        React.Children.map(children, child=>(
          <>
            <div/>
            <div className={s.elevatatorShaft}>
              {child}
            </div>
          </>
        ))
      }
    </div>
  );
};

export default ElevatorShaft;