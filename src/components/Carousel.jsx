import Carousel from 'react-bootstrap/Carousel';

function NavImages() {
  return (
    <Carousel>
      <Carousel.Item className='text-center bg-black'>
        <img
          className="img-fluid"
          src="/images/nike.webp"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item className='text-center bg-black'>
        <img
          className="img-fluid"
          src="/images/adidas1.webp"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item className='text-center bg-black'>
        <img
          className="img-fluid"
          src="/images/converse.webp"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default NavImages;