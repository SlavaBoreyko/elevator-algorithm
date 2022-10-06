import React, { FC, ReactNode } from 'react';
import s from './ElevatorShaft.module.scss';

export interface ElevatorShaftProps {
    children: ReactNode | ReactNode[];
}

const ElevatorShaft:FC<ElevatorShaftProps> = ({
  children,
}) => (
  <div className={s.elevatatorShaftsContainer}>
    {React.Children.map(children, child=>(
      <>
        <div/>
        <div className={s.elevatatorShaft}>
          {child}
        </div>
      </>
    ))}
  </div>
);

export default ElevatorShaft;