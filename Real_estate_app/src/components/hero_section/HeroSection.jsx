import React from 'react'
import './Hero.css';

function HeroSection() {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth hero-container">
            <div className="hero-left">
                left
            </div>

            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default HeroSection