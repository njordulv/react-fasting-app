import Slider from 'react-slick'
import { IoStarSharp } from 'react-icons/io5'
import { testimonials } from '../data/testimonials'
import './slider/slick.css'
import './slider/slick-theme.css'

const Testimonials = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '50px',
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    nav: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '20px',
        },
      },
    ],
  }

  const stars = Array(5).fill()

  return (
    <>
      <h1>Testimonials</h1>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div className="slide-item" key={testimonial.id}>
            <div className="slide-inner">
              <div className="slide-top">
                <img src={testimonial.image} alt="" />
                <div className="slide-name">
                  <h4>{testimonial.name}</h4>
                  <div>
                    {stars.map((_, index) => (
                      <IoStarSharp key={index} className="slide-icon" />
                    ))}
                  </div>
                </div>
              </div>
              <div>{testimonial.message}</div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default Testimonials
