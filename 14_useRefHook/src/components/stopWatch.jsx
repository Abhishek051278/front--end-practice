import React from 'react'
import { useState,useRef, useEffect } from 'react';

function StopWatch() {

  let [ time , setTime ] = useState(0);

  let refTimer = useRef(null);


   function startTimer (){

    if ( refTimer.current !== null ) return;
    refTimer.current = setInterval(()=>{

        setTime(time => time+1)
    } ,1000)

   };
    
   function stopTimer (){
    clearInterval(refTimer.current)
    refTimer.current = null;

   };

   function resetTimer (){
          stopTimer();
          setTime(0);

   };


   useEffect(() => {
  return () => clearInterval(refTimer.current);
}, []);




  return (
    <>
      <h1>  Stopwatch : {time} Seconds</h1>
      <br />

      <button
      onClick= {startTimer}>
        Start 
      </button>

      <br />
      <br />

      <button
      onClick= {stopTimer}>
        Stop 
      </button>

        <br />
        <br />
       
        <button
      onClick= {resetTimer}>
        Reset
      </button>

    
    </>
  )
}

export default StopWatch
