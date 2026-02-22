 import React from "react" ;
 import { useContext } from "react";
 import { cartContext } from "../Context/context";


 function Item (props){

    let cart = useContext(cartContext);
    console.log(cart)

    return(

      <> 
       <h2> {props.name} </h2>
        <p> Price :$ {props.price} </p>
        <button
        onClick = {()=> cart.setItems([...cart.items ,{ name : props.name , price : props.price }])}
        > Add to Cart</button>
      </>
    )
 }

 export default Item;