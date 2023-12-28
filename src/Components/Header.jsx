import React from 'react'
import "./Header.css"
import { TiShoppingCart } from "react-icons/ti";
export default function Header() {
  return (
    <>
    <header>
        <div className="header-container" id='Home'>
          
            <img src="/assets/hero.png" alt="heroImg" className='heroImg'/>
            
            <div className="header-content">
                <h4>Book your gas now...!</h4>
                <p>
                 We provide a best and saftey gas for our customers and provide 24/7 customer support.
                 </p>
            </div>
            
            <div className="headerTag">
              <a href="#Store">
             
               <h1 className='HeaderTagName'>Book now <span><TiShoppingCart /></span></h1> 
               
               </a>
            </div>
            
        </div>
    </header>
    </>
  )
}
