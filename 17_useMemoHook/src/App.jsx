import { useState , useMemo } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('');
  


  function expensiveTask (num){
          console.log(" inside Expensive task ")
    for(let i = 0 ; i<= 1000000000 ; i++ ){}

    return num *2;
  }
          

    // let doubleValue = expensiveTask(input);

      let doubleValue  = useMemo( () => expensiveTask(input),[input]);

     
  return (
    <>
      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
          

          <div>

            double : {doubleValue}
          </div>

          <input 
          type="number" 
          placeholder='enter number'
          value = {input}
          onChange = {(e) => setInput (e.target.value)}
          />
      
    </>
  )
}

export default App
