import React, { FC, ReactNode } from 'react';
import ButtonCircle from '../ButtonCircle/ButtonCircle';
import s from './ButtonCaption.module.scss';

export interface ButtonCaptionProps {
    caption: string;
    label: ReactNode;
    onClick: any;
}

const ButtonCaption:FC<ButtonCaptionProps> = ({
  caption,
  label,
  onClick,
}) => (
  <div className={s.btnContainer}>
    <span>{caption}</span>
    <div className={s.btnPlayContainer}>
      <ButtonCircle 
        label={label}
        onClick={onClick}
      />
    </div>  
  </div>
);

export default ButtonCaption;