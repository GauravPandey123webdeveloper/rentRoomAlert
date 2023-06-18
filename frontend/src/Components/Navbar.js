import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import './Navbar.css'


const Navbar = () => {
  const navigate = useNavigate();
  function handleLogin(){
    navigate('/Signin')
}

    return (
        <div className='Navbar-Container'>
          <div className='logo'>
                        <FcHome  size={50}/>

            </div>
            <div className='buttons'>
                <div>
                <button>My Booking</button>
                
                <button onClick={handleLogin}>Login</button>
                {/* <button>About us</button>
                <button>Menu</button> */}
                </div>
            </div>


        </div>
    )
}

export default Navbar