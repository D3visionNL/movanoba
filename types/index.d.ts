// types/index.d.ts

declare module 'movanoba' {
  // Define your types here:
  type MovementOptions = {
    movementName: string;
    movementDuration?: string;
    movementDelay?: string;
    triggerReflow?: string;
  };

  // Export the Movanoba function
  export const movement: (options?: MovementOptions) => void;

}
