import React, { useState } from 'react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <>
    <nav>
        <div className="sol">
            <h1>TITAN</h1>
        </div>
        <div className="orta">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li><input type="text" className='inp' placeholder='Search'/></li>
            </ul>
        </div>
        <div className="sag">
            <ul>
                <li>Sign-Up</li>
                <li>Login</li>
            </ul>
        </div>
        <div className="kapa">
        <div onClick={toggleMenu} className={`offcanvas-icon ${isMenuOpen ? 'open' : ''}`}>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
        </div>
        <div className={`offcanvas-menu ${isMenuOpen ? 'open' : ''}`}>
            <h1>TITAN</h1>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign-Up</li>
            <li>Login</li>
          </ul>
        </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar