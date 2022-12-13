    // Window modal to display projects among other things. Wrap with draggable package (might need to just wrap toolbar)

const Window = () => {


    return (
        <div className='window'>
            <Toolbar />
            <WindowDisplay />
        </div>
    )
}