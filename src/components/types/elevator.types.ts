export enum DirectionPickUp {
    UP = 'UP',
    DOWN = 'DOWN',
}

export interface PickUpType {
    currentfloor: number;
    direction: DirectionPickUp;
}

export interface dataDestination {
    currentFloor: number ;
    direction?: 'UP' | 'DOWN';
    nextFloor?: number ;
  }