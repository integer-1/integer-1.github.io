import { Carousel } from 'react-bootstrap'
import home1 from '../images/home1.png'
import home2 from '../images/home2.png'
import home3 from '../images/home3.png'

const images = [home1, home2, home3]

function HomeImageSlide() {
  return (
    <Carousel data-bs-theme="dark">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default HomeImageSlide
