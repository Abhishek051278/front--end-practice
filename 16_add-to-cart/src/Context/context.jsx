import { createContext } from "react";
import {useState} from "react";


export const cartContext = createContext(null);

function CartProvider(props) {
      

      let [ items , setItems] = useState([]);
    return (
        <cartContext.Provider value= {{ items , setItems}}>
            {props.children}
        </cartContext.Provider>

    )
}

export default CartProvider;