import React from 'react'
import { Carousel,Card } from 'react-bootstrap'

function Najeema() {
  return (

    <div>

    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/a37c7aa9669fcd4c.jpg?q=50"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/bca970efc4cee6ed.jpg?q=50"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/a652014e09a303a9.jpeg?q=50"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rukminim1.flixcart.com/flap/1688/280/image/75a15c3e19c3f7de.jpg?q=50"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/9a3a734aef20053a.jpg?q=50"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/d6b8eb49acbc80a0.jpg?q=50"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

<div className="allCardss">
      <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src="https://rukminim1.flixcart.com/image/200/200/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=70" />
      <Card.Body>
        <Card.Title>Monitors</Card.Title>
        <Card.Text>
        From ₹7949
        </Card.Text>
        <Card.Text>
      Lenovo
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '12rem',height:'8rem' }}>
      <Card.Img variant="top" src="https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70" />
      <Card.Body>
        <Card.Title>Top Mirrorless Cameras</Card.Title>
        <Card.Text>
        Shop Now!
        </Card.Text>
        {/* <Card.Text>
      Lenovo
        </Card.Text> */}
      </Card.Body>
    </Card>

    
    <Card style={{ width: '12rem',height:'8rem' }}>
      <Card.Img variant="top" src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70" />
      <Card.Body>
        <Card.Title>Printers</Card.Title>
        <Card.Text>
        From ₹3999
        </Card.Text>
        <Card.Text>
      HP
        </Card.Text>
      </Card.Body>
    </Card>

    
    <Card style={{ width: '12rem',height:'8rem' }}>
      <Card.Img variant="top" src="https://rukminim1.flixcart.com/image/200/200/l58iaa80/electric-cycle/i/y/f/-original-imagfykthgudy4qz.jpeg?q=70" />
      <Card.Body>
        <Card.Title>Electric cycle</Card.Title>
        <Card.Text>
        Up to 40% Off
        </Card.Text>
        <Card.Text>
    Nuze,Motovolt & more
        </Card.Text>
      </Card.Body>
    </Card>

<div >  
    <Card style={{ width: '12rem',height:'8rem' }}>
      <Card.Img variant="top" src="https://rukminim1.flixcart.com/image/200/200/l0sgyvk0/cap/6/d/2/free-casual-cap-polo-original-imagchxw8dyet3zu.jpeg?q=70" />
      <Card.Body>
        <Card.Title>Caps</Card.Title>
        <Card.Text>
        Min 50% Off
        </Card.Text>
        {/* <Card.Text>
      Lenovo
        </Card.Text> */}
      </Card.Body>
    </Card>
    </div>  
    <Card style={{ width: '12rem',height:'8rem' }}>
      <Card.Img variant="top" src="https://rukminim1.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70" />
      <Card.Body>
        <Card.Title>Gym Essentials</Card.Title>
        <Card.Text>
        From ₹139
        </Card.Text>
        <Card.Text>
    Shop Now!
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>

  )
}

export default Najeema;