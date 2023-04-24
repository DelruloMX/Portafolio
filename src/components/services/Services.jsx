import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Interface (UI) design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Experience (UX).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframes and Prototypes creation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User research and analysis.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI/UX evaluation and continuous improvement.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI/UX consulting and advisory services.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom website development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web application development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive web design and development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>System and platform integration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Search Engine Optimization (SEO).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maintenance and technical support.</p>
            </li>
            
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Mobile Apps</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design and development of native mobile applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Development of cross-platform mobile applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integration of systems and platforms.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Development of enterprise mobile applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Consulting and advisory services in mobile application development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maintenance and technical support.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
        <article className="service">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Corporate identity design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Graphic design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User interface (UI) design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User experience (UX) design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Product design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design consulting and advisory services.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Marketing Digital</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Soon!.</p>
            </li>
          
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Ethical Hacking</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Soon!.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services