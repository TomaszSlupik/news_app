import React from 'react'
import './Svgimage.scss'

export default function Svgimage() {
  return (
    <div className='svgimage'>
        <div className="svgimage__box">
            <div className="svgimage__box-picture">
            <div className="svgimage__box-picture--text">
                Aplikacja wyświetla aktualne Newsy pobierane z publicznego API.
            </div>
            <img className="svgimage__box-picture" src={process.env.PUBLIC_URL + '/img/svg/blob.svg'} alt="" />
            
        </div>
        </div>
    </div>
  )
}
