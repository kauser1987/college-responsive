import React from 'react'
import './Campus.css'
import galler1 from '../../assets/gallery-1.png'
import galler2 from '../../assets/gallery-2.png'
import galler3 from '../../assets/gallery-3.png'
import galler4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={galler1} alt="" />
            <img src={galler2} alt="" />
            <img src={galler3} alt="" />
            <img src={galler4} alt="" />
        </div>
        <button className='btn dark-btn'>See More Here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus