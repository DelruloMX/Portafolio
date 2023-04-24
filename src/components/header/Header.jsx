import React from 'react'
import './header.css'
import CTA from './CTA'
import Typical from 'react-typical'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      {" "}
        <h5>
          {" "}
          <Typical
             loop={Infinity}
             steps={[
              "  Hello I'm",
                 1000,
                 " welcome to ",
                 5000,
                 "Download my CV",
                 8000,
                 "Contact us now!",
                 10000,
                 "swipe for more information",
                 11000,
             ]}
          />
        
        </h5>
        {" "}
        <h1>
        {" "}
          <Typical
             loop={Infinity}
             steps={[
              "  ByteSoft",
                 2000,
             ]}
          />
          
        </h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
