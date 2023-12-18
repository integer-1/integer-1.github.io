import { Carousel } from 'react-bootstrap'
import home1 from '../images/home1.png'
import home2 from '../images/home2.png'
import home3 from '../images/home3.png'

function HomeImageSlide() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={home1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={home2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={home3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeImageSlide
