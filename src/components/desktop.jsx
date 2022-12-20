import Window from "./window"

const Desktop = () => {

    return (
    <div className='desktop' style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div className='container' style={{ position: 'absolute', width: '500px', height: '500px', background: 'blue'}}>
            <Window />
        </div>
            
    </div>
    )
}

export default Desktop