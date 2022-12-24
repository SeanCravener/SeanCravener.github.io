import React, { useState } from 'react';

const Toolbar = (props) => {
    const [title, setTitle] = useState('My First Modal')

  return (
    <div style={{ width: `${props.width}px`, height: `${props.height}px`, background: 'purple' }}>
        <div className='toolbar-title' >
        {title}
        </div>
    </div>
  );
}

export default Toolbar;