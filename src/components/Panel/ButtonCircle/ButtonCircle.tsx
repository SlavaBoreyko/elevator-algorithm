import React, { FC, ReactNode } from 'react';
import s from './ButtonCircle.module.scss';

export interface ButtonCircleProps {
    label?: ReactNode;
    onClick?: any;
    padding?: string;
}

const ButtonCircle: FC<ButtonCircleProps> = ({
  label,
  onClick,
  padding,
}) => (
  <button 
    className={s.btnCircleDark}
    onClick={onClick}
    style={padding ? {
      padding: padding
    } : {}}
  >
    {label}
  </button>
);

export default ButtonCircle;