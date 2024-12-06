export default function Window({ 
    id, 
    title, 
    isActive, 
    onClose, 
    onFocus, 
    style, 
    children 
  }: WindowProps) {
    const nodeRef = useRef(null)
  
    // Optional: Log or use the id if needed
    console.log('Window ID:', id);
  
    return (
      <Draggable
        handle=".window-header"
        nodeRef={nodeRef}
        bounds="parent"
        onMouseDown={onFocus}
      >
        <div
          ref={nodeRef}
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
    )
  }
  