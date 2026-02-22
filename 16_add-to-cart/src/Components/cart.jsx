 import React, {useContext} from 'react';
 import { cartContext } from '../Context/context';
 
 function Cart() {

       let cart = useContext(cartContext);

       let total = cart.items.reduce((a,b)=>  a + b.price ,0 )
   return (
     <div>
              <h1> Cart </h1>  

              { cart && cart.items.map((items) => <li> {items.name } - ${ items.price} </li>)}


             <h2>
                  Total Bill :$ { total }
             </h2>
       
     </div>
   )
 }
 
 export default Cart
 