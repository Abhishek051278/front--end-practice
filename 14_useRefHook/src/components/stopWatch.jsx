import React from 'react'

function StopWatch() {

  let [ time , setTime ] = useState(0);


   function startTimer (){


   };
    
   function stopTimer (){


   };

   function resetTimer (){


   };



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
