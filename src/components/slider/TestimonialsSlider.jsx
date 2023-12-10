import Slider from 'react-slick'
import { IoStarSharp } from 'react-icons/io5'
import { SiTrustpilot } from 'react-icons/si'
import { testimonials } from '../../data/testimonials'
import './slick.css'
import './slick-theme.css'

const TestimonialsSlider = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '50px',
    slidesToShow: 1,
    speed: 700,
    autoplay: true,
    pauseOnHover: false,
    nav: true,
    dots: true,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 640,
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
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div className="slide-item" key={testimonial.id}>
            <div className="slide-inner">
              <div className="slide-top">
                <img src={testimonial.image} alt="" />
                <span className="slide-trust-icon">
                  <SiTrustpilot /> Trustpilot
                </span>
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

export default TestimonialsSlider
