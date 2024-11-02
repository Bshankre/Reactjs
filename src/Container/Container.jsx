import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';


const Container = () => {
     // State to track the current theme
 const [isDarkTheme, setIsDarkTheme] = useState(false);
  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };
  return (
    <div id="container"  style={{
        backgroundColor: isDarkTheme ? 'black' : ' white', // Toggle background color
        color: isDarkTheme ? 'white' : 'black', // Adjust text color for contrast
      }}>
      <div id='nav-content' className="navigation">
      <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? 'custom-link-1 active-link' : 'custom-link-1'
    }
  >HOME</NavLink>
      <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? 'custom-link-1 active-link' : 'custom-link-1'
    }
  >
    ABOUT US
  </NavLink>
  <NavLink
    to="/register"
    className={({ isActive }) =>
      isActive ? 'custom-link-1 active-link' : 'custom-link-1'
    }
  >
    REGISTER
  </NavLink>
  <NavLink
    to="/studentlist"
    className={({ isActive }) =>
      isActive ? 'custom-link-1 active-link' : 'custom-link-1'
    }
  >
    STUDENT LIST
  </NavLink>
  <NavLink
    to="/contactus"
    className={({ isActive }) =>
      isActive ? 'custom-link-1 active-link' : 'custom-link-1'
    }
  >
    CONTACT US
  </NavLink>
    
    <button onClick={toggleTheme} style={{ padding: '10px', marginBottom: '20px' ,marginTop:'20px',backgroundColor:'rgb(52, 147, 113)' ,color:'white',fontWeight:'bold',borderRadius:'7px',border:'0px'}}>
            {isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
    </div>
    <div id="output">
        <Outlet></Outlet>
    </div>
    </div>
  )
}

export default Container
