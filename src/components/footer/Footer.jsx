import React from 'react'
import "./Footer.css"
import { footerLinks } from './footer-data';

function Footer() {
    console.log(footerLinks);
  return (
    <footer>
        <section className='footer-sections-box'>
            <span>
                <div className='intro-footer'>
                    <p className='foot-logo'>E-Store</p>
                    <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                </div>
                <div className='social-media-box'>
                    <ul>
                        <li><img className='social-media-icons' src="./src/assets/logo-github.svg" alt="github logo"/></li>
                        <li><img className='social-media-icons' src="./src/assets/logo-twitter 2.svg" alt="X logo"/></li>
                        <li><img className='social-media-icons' src="./src/assets/logo-facebook.svg" alt="facebook logo"/></li>
                        <li><img className='social-media-icons' src="./src/assets/logo-instagram.svg" alt="instagram logo"/></li>
                    </ul>
                </div>
            </span>
            {
                footerLinks.map((section, index) => {
                    return (
                        <span key={index}>
                            <p className='section-name'>{section.name}</p>
                            <ul>
                                <li className='section-link'>{section.link1}</li>
                                <li>{section.link2}</li>
                                <li>{section.link3}</li>
                                <li>{section.link4}</li>
                            </ul>
                        </span>
                    )
                })
            }
        </section>
        <section className='foot-btm'>
            <p>E-Store © 2024 </p>
        </section>
    </footer>
  )

}

export default Footer