import ArrowDOWN from '../../Panel/ArrowDOWN/ArrowDOWN';
import ArrowUP from '../../Panel/ArrowUP/ArrowUP';

export const switchArrowComponent = (direction: 'UP' | 'DOWN' | undefined) => {
  if(direction) {
    switch(direction) {
    case('UP'): 
      return <ArrowUP green/>;
    case('DOWN'): 
      return <ArrowDOWN green/>;
    }
  } else {
    return undefined;
  }
};
