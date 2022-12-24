import React, { useState } from 'react'
import Frame from "../Modal/frame"

const Desktop = () => {
    const [width, setWidth] = useState(450);
    const [height, setHeight] = useState(450);

    return (
    <div className='desktop'>
        <Frame maxHeight={height} maxWidth={width} />
    </div>
    )
}

export default Desktop