import { useContext } from 'react'
import Counter from './Components/counter'
import './App.css'
import { counterContext } from './Context/context'

function App() {
    
   const counterState = useContext(counterContext) ;

   

  return (
    
      <div className = "APP">
              
              <h1> Count is {counterState.count} </h1>
              <Counter />
              <Counter />
              <Counter />
              <Counter />
      </div>
     
    
  )
}

export default App
