import Item from './Components/item'
import './App.css'
import Cart from './Components/cart'
import CartProvider from './Context/context'

function App() {
  

  return (
    <>
       <Item name = "LapTop" price = { 10000}/>
       <Item  name = "SmartPhone" price ={ 500}/>
       <Item  name = "Air-Conditioner " price = { 3000}/>
       <Cart/>
    </>
  )
}

export default App
