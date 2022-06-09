import React, {useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    },[]);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo" />
        <img className='nav__avatar' 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix avatar" />
    </div>
  )
}

export default Navbar