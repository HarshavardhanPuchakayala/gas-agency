import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <footer>
        <div className="footerlogo">
            <div className="Footerlogo">
                <a href="#Home">
            <img src="/assets/logo.jpg" alt="" className='footerlogoimg'/> </a>
            <h1 className='footerlogoname'>SUPERGAS</h1>
           
            </div>
            <p>We provide a best and saftey gas for our customers and provide 24/7 customer support.</p>
        </div>
        <div className='footerLogoGallery'>
            <h1 className='footerHeading'>Gallery</h1>
            <a href="#Gallery">
            <img src="/assets/footerLogo.jpg" alt="" />
            </a>
        </div>
        <div className="footerLists">
        <h1 className='footerHeading'>Useful Links</h1>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#AboutUs">Aboutus</a></li>
                <li><a href="#Whyus">whyus..?</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#Gallery">Gallery</a></li>
            </ul>
        </div>
    </footer>
  )
}
