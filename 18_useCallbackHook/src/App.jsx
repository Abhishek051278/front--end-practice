import { useCallback, useState } from 'react'
import ChildComponent from './Components/childComponent'

import './App.css'

function App() {
  const [count, setCount] = useState(0)


   const handleClick = useCallback( () => {

       setCount( count => count + 1)
   },[]);

  return (
    <>
        
        <p> count : {count}</p>

        <br />

        
        <button 
         onClick = { handleClick}>
          Increment
        </button>

        <br />

        <ChildComponent  button = "Add Value +"   handleClick = {handleClick}/>
       
    </>
  )
}

export default App

// Every time a component re-renders , all functions inside it are recreated .
// handleClick is a new function reference . If child is memoized with React.memo , it will still re-render 
// because props reference changed.