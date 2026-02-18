import Counter from './counter/Counter'
import './App.css'
import { useState } from 'react';

function App() {
    
   let [ state , setState] = useState( true);

  return (
    <>

       <button
       onClick = { (e) => setState(!state)}>
        Toogle
       </button>
        { state ? <Counter/> : ""};
        
    </>
  )
}

export default App
