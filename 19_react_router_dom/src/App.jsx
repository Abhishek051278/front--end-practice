import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import Dashboard from './Components/dashboard';
import Navbar from './Components/navbar';
import './App.css'
import ParamComp from './Components/ParamComp';

const router = createBrowserRouter(
  [{
    path: "/",
    element: <div> 
                           <Home />
                           <Navbar/>

            </div>
  },

  {
    path: "/about",
    element: <div> 
                           <About />
                           <Navbar/>

            </div>
  },

  {
    path: "/dashboard",
    element: <div> 
                           <Dashboard />
                           <Navbar/>

            </div>
  },

  {
     path :"/student/:id",
     element :<div> 
                           <ParamComp />
                           <Navbar/>

            </div>
  }

  ])


function App() {


  return (
    <>
     <RouterProvider  router = {router}/>
    </>
  )
}

export default App
