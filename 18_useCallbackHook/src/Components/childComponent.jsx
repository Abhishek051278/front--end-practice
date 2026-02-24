import React from 'react' 

    const ChildComponent = React.memo((props) =>  {                 

    console.log("child component re-rendered")
  return (
    <div>

         <button 
          onClick ={props.handleClick}>
             {props.button}
         </button>
         
    </div>
  )
}
);
export default ChildComponent


// Child component initially renders because it receives props from the parent.
// React.memo prevents unnecessary re-renders when props remain the same.
// However, if a function is passed as a prop, React.memo will NOT prevent re-rendering
// because a new function reference is created on every parent render.