declare module 'react-draggable' {
    import * as React from 'react';
  
    export interface DraggableProps {
      axis?: 'both' | 'x' | 'y';
      bounds?: { left?: number; right?: number; top?: number; bottom?: number } | string | false;
      defaultClassName?: string;
      defaultClassNameDragging?: string;
      defaultClassNameDragged?: string;
      defaultPosition?: { x: number; y: number };
      disabled?: boolean;
      grid?: [number, number];
      handle?: string;
      nodeRef?: React.RefObject<HTMLElement>;
      onStart?: (e: MouseEvent, data: DraggableData) => void | false;
      onDrag?: (e: MouseEvent, data: DraggableData) => void | false;
      onStop?: (e: MouseEvent, data: DraggableData) => void | false;
      position?: { x: number; y: number };
      positionOffset?: { x: number; y: number };
      scale?: number;
    }
  
    export interface DraggableData {
      node: HTMLElement;
      x: number;
      y: number;
      deltaX: number;
      deltaY: number;
      lastX: number;
      lastY: number;
    }
  
    declare class Draggable extends React.Component<DraggableProps> {}
  
    export default Draggable;
  }