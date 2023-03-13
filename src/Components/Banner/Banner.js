import React from 'react'
import './Banner.css'

const Banner = ()=> {
    return (
        <div 
         className='banner'>
            <div className='content' >
                <h1 className='title'>Thunivu (Tamil)</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>
                A major bank heist takes an unnerving turn when a mysterious interloper known only as Dark Devil begins to hijack the operation.
                </h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}
export default Banner;