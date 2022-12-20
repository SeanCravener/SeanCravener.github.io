// This will be the frame for all the window displays
// Will handle resizing of window
// Initial position will be set, but toolbar will handle repositioning. (Pass setX, setY? example)
// Maybe have object be passed in. Object contains all display info, for example: title for toolbar, html file location
import React, { useState, useRef } from 'react';
import WindowDisplay from './display';
import Toolbar from './toolbar';

const Window = () => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mouseDown = useRef(false);

  const handleMouseDown = (e) => {
    mouseDown.current = true;
  };

  const handleMouseMove = (e) => {
    if (!mouseDown.current) return;

    // update the width and height based on the mouse position
    setWidth(e.clientX);
    setHeight(e.clientY);
  };

  const handleMouseUp = (e) => {
    mouseDown.current = false;
  };

  return (
    
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ width: `${width}px`, height: `${height}px`, background: 'White'}}
    >
      <Toolbar />
      <WindowDisplay />
    </div>
  );
};

export default Window;

const positioning = () => {

    const mouseDown = useRef(false);
    const initialMousePos = useRef({});
  
    const handleMouseDown = (e) => {
      mouseDown.current = true;
      initialMousePos.current = { x: e.clientX, y: e.clientY };
    };
  
    const handleMouseMove = (e) => {
      if (!mouseDown.current) return;
  
      // update the x and y position based on the mouse position
      setX(x + e.clientX - initialMousePos.current.x);
      setY(y + e.clientY - initialMousePos.current.y);
      initialMousePos.current = { x: e.clientX, y: e.clientY };
    };
  
    const handleMouseUp = (e) => {
      mouseDown.current = false;
    };
  
    return (
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ width: '300px', height: '300px', left: `${x}px`, top: `${y}px` }}
      >
        <!-- component content goes here -->
      </div>
    );
  };
