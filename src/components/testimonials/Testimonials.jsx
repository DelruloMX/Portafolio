import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Raul Casillas',
    review: 'We are very happy with the work that the web development company has done. They have provided us with exceptional service, always willing to help and resolve any issues that arise. The quality of their work is first-class, and we would not hesitate to recommend them to anyone looking for high-quality web development services'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'We are very happy with the work that the web development company has done. They have provided us with exceptional service, always willing to help and resolve any issues that arise. The quality of their work is first-class, and we would not hesitate to recommend them to anyone looking for high-quality web development services'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'We are very happy with the work that the web development company has done. They have provided us with exceptional service, always willing to help and resolve any issues that arise. The quality of their work is first-class, and we would not hesitate to recommend them to anyone looking for high-quality web development services'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'We are very happy with the work that the web development company has done. They have provided us with exceptional service, always willing to help and resolve any issues that arise. The quality of their work is first-class, and we would not hesitate to recommend them to anyone looking for high-quality web development services'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img alt='avatar' src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials