import { useState } from 'react'

import './App.css'

function App() {
        

  let [ counter , setCounter ]    = useState(10);



        function addValue () {
        if ( counter < 20){
           setCounter(  counter + 1)
        }
     };

     function removeValue () {
          if ( counter > 0 ){
            setCounter( counter - 1)
          }
     };
  
  
  return (
           <>
            <h1> My counter app </h1>
            <p>  current count is {counter}</p>

            <button
            onClick= {addValue}
            > Add value  </button>
           
           <button
           onClick = {removeValue}
           >  Remove Value     </button>
           
           
           
           
           </>
  )
}

export default App
