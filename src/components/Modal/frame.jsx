// This will be the frame for all the window displays
// Will handle resizing of window
// Initial position will be set, but toolbar will handle repositioning. (Pass setX, setY? example)
// Maybe have object be passed in. Object contains all display info, for example: title for toolbar, html file location
import React, { useState } from 'react';
import Display from './display';
import Toolbar from './toolbar';

const Frame = (maxWidth, maxHeight) => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  
  let startX, startY = null;

  const handleMouseDown = (e) => {
    startX = e.clientX;
    startY = e.clientY;
    // Add event listeners for mousemove and mouseup events
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
     // Calculate the new size of the element based on the mouse position
    const newWidth = width + (startX - e.clientX);
    const newHeight = height + (startY - e.clientY);


    // Update the element's size using the new width and height
    setWidth(() => {
      if (maxWidth < newWidth) {
        return maxWidth;
      } else {
        return newWidth;
      }
    });
    setHeight(() => {
      if (maxHeight < newHeight) {
        return maxHeight;
      } else {
        return newHeight;
      }
    });
  };

  const handleMouseUp = (e) => {
  // Remove the event listeners
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);

  };

 
  return (
    
    <div className='modal-frame' onMouseDown={handleMouseDown} style={{ background: 'blue', width: `${width}px`, height: `${height}px`, border: '7px outset purple', cursor: 'ns-resize' }}>
      <Toolbar height={height * .10} />
      <Display width={width} height={height * .90} />
    </div>
  );
};

export default Frame;