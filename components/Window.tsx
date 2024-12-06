import React, { useRef } from 'react';
import Draggable from 'react-draggable';

interface WindowProps {
  id: string;
  title: string;
  isActive: boolean;
  onClose: () => void;
  onFocus: () => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({
  id,
  title,
  isActive,
  onClose,
  onFocus,
  style,
  children,
}) => {
  // UseRef to handle the DOM reference for draggable
  const nodeRef = useRef<HTMLDivElement>(null); // Updated useRef type

  return (

    <Draggable
      handle=".window-header"
      nodeRef={nodeRef as React.RefObject<HTMLElement>} // Pass the ref to Draggable
      bounds="parent"
      onMouseDown={onFocus} // Focus the window on mouse down
    >

      <div
        ref={nodeRef} // Attach ref to the div
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
};

export default Window;
