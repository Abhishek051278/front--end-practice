import React from 'react'
import { useNavigate} from "react-router-dom";

function About() {

        
    const navigate = useNavigate();

    function handleClick (){
        navigate('/dashboard');
    }
  return (
    <div>
      About

          <button 
           onClick = {handleClick}>
            Move to dashboard page
          </button>
    </div>
  )
}

export default About
