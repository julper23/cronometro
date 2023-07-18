import './App.css'

import useCronometro from './hooks/useCronometro'

function App() {
  const {timeFormat,startC,pauseC,pause,stopC,diff} = useCronometro();

  return (
    <div className='App' >
      <h1 className='timer'>{timeFormat(diff)}</h1>
      <button onClick={()=>{startC()}}>{timeFormat(diff)==="00:00:00:00"?"Start":"Restart"}</button>
      <button onClick={()=>{pauseC()}}>{pause?"Continue":"Pause"}</button>
      <button onClick={()=>{stopC()}}>{"Stop"}</button>
    </div>
  )
}

export default App
