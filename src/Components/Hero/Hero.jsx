import React from 'react'
import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>we ensure better education for better world.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem illo optio saepe provident magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, soluta!</p>
        <button className='btn'>Explore more <img src={darkArrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero