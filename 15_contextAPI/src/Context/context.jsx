import { createContext , useState } from "react";

export const counterContext = createContext(null);

export function CounterProvider (props){

   const [ count , setCount ] = useState(0);

    return (

        <counterContext.Provider value = {{ count , setCount, name : "abhishek"}}>
          {props.children}
        </counterContext.Provider>
    )
}