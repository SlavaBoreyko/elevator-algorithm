import React, { FC, ReactNode } from 'react';
import s from './ButtonCircle.module.scss';

export interface ButtonCircleProps {
    label?: ReactNode;
    floor?: number;
}

const ButtonCircle: FC<ButtonCircleProps> = ({
  label,
  floor,
}) => (
  <button className={s.btnCircleDark}
    onClick={() => console.log(floor)}
  >
    {label}
  </button>
);

export default ButtonCircle;