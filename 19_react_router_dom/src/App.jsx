import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import Dashboard from './Components/dashboard';
import Navbar from './Components/navbar';
import './App.css'
import ParamComp from './Components/ParamComp';
import Courses from './Components/courses';
import MockTests from './Components/mock_tests';
import Reports from './Components/reports';
import NotFound from './Components/notFound';

const router = createBrowserRouter(
  [{
    path: "/",
    element: <div> 
                           <Home />
                           <Navbar/>

            </div>,

           
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

            </div>,
     children : [
        {
          path: 'courses',
          element: <Courses/>      
        },

        {
          path : 'mock-tests',
          element:   <MockTests/>         
        },

        {
           path:'reports',
           element: <Reports/>     
        },
     ]        
  },

  {
     path :"/student/:id",
     element :<div> 
                           <ParamComp />
                           <Navbar/>

            </div>
  },

  {
     path : '*',
     element : <NotFound/>
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
