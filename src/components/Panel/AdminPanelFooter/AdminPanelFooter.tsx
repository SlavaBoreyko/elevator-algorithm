import ButtonCaption from '../ButtonCaption/ButtonCaption';
import { dataDestination, DirectionPickUp } from '../../types/elevator.types';
import Display from '../../Display/Display/Display';
import s from './AdminPanelFooter.module.scss';

import iconStep from '../../../assets/svg/elevator-step.svg';
import iconPlay from '../../../assets/svg/play.svg';
import { FC } from 'react';

const dataSimulation: dataDestination[] = [
  {
    currentFloor: 2,
    direction: DirectionPickUp.UP,
  },
  {
    currentFloor: 4,
    direction: DirectionPickUp.DOWN,
  },
];

export interface AdminPanelProps {
  dataPickUps: dataDestination[];
  playAction: any;
  stepAction: any;
}

const AdminPanelFooter:FC<AdminPanelProps> = ({
  dataPickUps = dataSimulation,
  playAction, 
  stepAction,
}) => (
  <div className={s.queueFooter}>
    {/* <ButtonCaption 
      caption='Play'
      label={<img style={{ width: '40%', marginLeft: '0.2rem'}} src={iconPlay}/>}
      onClick={playAction}
    /> */}
    <ButtonCaption 
      caption='1 step'
      label={<img style={{ width: '60%'}} src={iconStep}/>}
      onClick={stepAction}
    />
    <div className={s.displayContainer}>
      <span>Requests </span>
      <Display data={dataPickUps} />
    </div>
  </div>
);

export default AdminPanelFooter;