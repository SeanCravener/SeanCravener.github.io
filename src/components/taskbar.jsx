// Taskbar at bottom of desktop area

const Taskbar = () => {

    return (
        <div className='taskbar'>
            <StartMenu />
            // minimized modal windows displayed here
            <TaskbarTray />
        </div>
    )
}