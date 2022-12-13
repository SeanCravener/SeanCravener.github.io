import React, { useState } from "react";
import { useEffect } from "react";

// TODO
// Need to add draggable package for window iframes

const App = () => {
  const [toggle, setToggle] = useState(true)

  const toggleModal = () => {
    if (toggle) {
      setToggle(false)
    } else {
      setToggle(true)
    }
    return
  }

  useEffect(() => {
    if(!toggle) {
      document.getElementById('123').remove()
      return
    } else {
      return
    }
  }, [toggle])

  return (
    <div className='App'>
      <button className='btn btn-primary' type='button' onClick={() => toggleModal()}>Show/Hide</button>
      <Window />
      {/* <Desktop />
      <Taskbar />   */}
    </div>
  );
}

const Window = () => {

  return (
      <div className='window'>
        <iframe src='Projects\Frontend-Mentor-Challenges\lvl1-single-price-grid\index.html' width='300' height='300' id='123'></iframe>
          {/* <Toolbar />
          <WindowDisplay /> */}
      </div>
  )
}

export default App
