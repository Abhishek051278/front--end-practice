import React from 'react'
import { useState,useEffect } from 'react';


function Counter() {
     
      let [ counter , setCounter ]    = useState(0);


      useEffect (()=> {

          console.log('counter mounted')

          return function (){
            console.log('Unmount counter')                     // without dependecy it runs after every render 
          }
      } ,[])

      
       useEffect (()=> {

          console.log('counter updated', counter)                      // with depenency it runs only when specific value change
                       
          return ()=> {
            
            console.log(' counter useffect run ' , counter )          // cleanup function runs when component unmounts
          }
        } ,[counter])

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
            <p
            style = {{ backgroundColor : "yellow"}}
            
            >  current count is {counter}</p>

            <button
            style = {{ backgroundColor : "green"}}
            onClick= {addValue}
            > Add value  </button>
           
           <button
            style = {{ backgroundColor : "red"}}

           onClick = {removeValue}
           >  Remove Value     </button>   
         </>
  )
}

export default Counter
