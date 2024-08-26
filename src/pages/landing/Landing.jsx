import React from 'react'
import "./Landing.css"

function Landing() {
  return (
    <section className='landing-section'>
        <div className='landing-left-area'>
            <div className='left-div'>
                <p className='bold-text'>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
                <p className='landing-p'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className='landing-btn'>Shop Now</button>
            </div>
            <div className='landing-btm-section'>
                <span>
                    <p className='span-p'>200+</p>
                    <p>International Brands</p>
                </span>
                <span>
                    <p className='span-p'>2,000+</p>
                    <p>High-Quality Products</p>
                </span>
                <span>
                    <p className='span-p'>30,000+</p>
                    <p>Happy Customers</p>
                </span>
            </div>
        </div>
        <div className='landing-right-area'>
            {/* Background image */}
        </div>
    </section>
  )
}

export default Landing