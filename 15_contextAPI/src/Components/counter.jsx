import React from 'react' ;
import { useContext } from 'react';
import { counterContext } from '../Context/context';

 function Counter (){
         
            const conterContext = useContext(counterContext);

    return (
         
        <div>

        <button
         onClick = { ()=> conterContext.setCount( conterContext.count + 1)}
        >Increment</button>

        <button 
        onClick = { ()=> conterContext.setCount( conterContext.count - 1)}
        > Decrement </button>
        </div>

    )
}


export default Counter