import React from 'react'
import { useState,useEffect,useRef } from 'react';

function LearningComponent() {



     const [count, setCount] = useState(0)
    
  let val = useRef(1);
   let btnref = useRef();

      function handleIncrement (){
           val.current = val.current + 1 ;
           console.log("val is " , val )
        setCount(count + 1 )
      };


      function changeColor(){
          btnref.current.style.backgroundColor = "red"
      }
     

      useEffect (()=> {

        console.log("it  runs on every render ")
      })

  return (
    <>
          <button style={{ backgroundColor : " aqua"}}
           onClick = { handleIncrement}
           ref={btnref}>

            Increment { count}
          </button>
          <br />

          <button 
          onClick={changeColor}
           >
            change color of 1st button 
          </button>
        
    </>
  )
}

export default LearningComponent
