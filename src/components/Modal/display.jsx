import React from 'react';

const Display = (props) => {
  return (
    <iframe style={{ width: `${props.width}px`, height: `${props.height}px`, borderWidth: '0px' }} src='Projects/Frontend-Mentor-Challenges/lvl1-single-price-grid/index.html' />
  );
}

export default Display;