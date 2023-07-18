import './App.css'

import useCronometro from './hooks/useCronometro'

function App() {
  const {timeFormat,startC,pauseC,pause,stopC,diff} = useCronometro();

  return (
    <div className='App' >
      <h1 className='timer'>
        {timeFormat(diff).slice(0, -3)}
        <span className='milliSeconds'>{timeFormat(diff).slice(-3)}</span>
      </h1>
      <div className='botonera'>
        <button className='boton' onClick={()=>{startC()}}> {timeFormat(diff)==="00:00:00.00"?"Start":"Restart"} </button>
        <button className='boton' onClick={()=>{pauseC()}} disabled={!diff}> {pause?"Continue":"Pause"} </button>
        <button className='boton' onClick={()=>{stopC()}} disabled={!diff}> {"Stop"} </button>
      </div>
      
    </div>
  )
}

export default App
