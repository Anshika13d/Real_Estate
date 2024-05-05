import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from '../navComp/Home'
import './Head.css'

function Header() {
    return (
      <>
        <section className="h-wrapper">
          <div className="paddings innerWidth h-container">
            <div> {/* Wrap logo and header items in separate divs */}
              <img src="./logo.png" alt="logo" width={200} />
            </div>
  
            <div className="flexCenter h-menu">
              <NavLink to="/residencies">Residencies</NavLink>
              <NavLink to="/value">Our Value</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
              <NavLink to="/getStarted">Get Started</NavLink>
              <button className="button">
                <a href="">Contact</a>
              </button>
            </div>
          </div>
        </section>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residencies" element={<Home />} />
          <Route path="/value" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/getStarted" element={<Home />} />
        </Routes>
      </>
    );
  }
  

export default Header