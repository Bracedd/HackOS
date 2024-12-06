/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useRef } from 'react';
import Draggable from 'react-draggable';

// Define the interface for the component props
interface WindowProps {
  id?: string; // Optional id
  title: string;
  isActive: boolean;
  onClose: () => void;
  onFocus: () => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function Window({
  id, // Explicitly include id, even if not used
  title,
  isActive,
  onClose,
  onFocus,
  style,
  children
}: WindowProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  
  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      bounds="parent"
      onMouseDown={onFocus}
    >
      <div
        ref={nodeRef}
        data-id={id} // Add data attribute if you want to use id
        className={`window ${isActive ? 'shadow-2xl' : 'shadow-xl'}`}
        style={{
          ...style,
          width: '800px',
          height: '600px',
        }}
      >
        <div className="window-header">
          <div className="window-buttons">
            <button className="window-button window-close" onClick={onClose} />
            <button className="window-button window-minimize" />
            <button className="window-button window-maximize" />
          </div>
          <span className="window-title">{title}</span>
        </div>
        <div className="flex-1 overflow-hidden" style={{ height: 'calc(100% - 32px)' }}>
          {children}
        </div>
      </div>
    </Draggable>
  );
}