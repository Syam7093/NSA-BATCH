// import logo from './logo.svg';
// import { Button } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import { Alert } from 'bootstrap';
// import { Card,Button } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Najeema2() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div className="App">
      
      
    <div>
    <Carousel responsive={responsive}>
  <div className="cards"> <img src="https://rukminim1.flixcart.com/image/416/416/l5fnhjk0/dslr-camera/f/t/m/eos-r10-24-2-r10-canon-original-imagg42fsbgv79da.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Top Mirrorless<br></br>
        Cameras</h4>
        <h6>Shop Now</h6></div>
  <div className="cards"><img src="https://rukminim1.flixcart.com/image/200/200/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Monitors</h4>
        <h6>From ₹7949 </h6>
        <h6>Shop Now</h6></div>
  <div className="cards"> <img src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Printers</h4>
        <h6>From ₹3949 </h6>
        <h6>Shop Now</h6></div>
  <div className="cards"> <img src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Printers</h4>
        <h6>From ₹3949 </h6>
        <h6>Shop Now</h6></div>
        <div className="cards">
        <img src="https://rukminim1.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Gym Essesntials</h4>
        <h6>From ₹139 </h6>
        <h6>Shop Now</h6>
        </div>
        <div className="cards">
        <img src="https://rukminim1.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Remote Control <br></br>Toys</h4>
        <h6>Upto 80% Off</h6>
        <h6>Shop Now</h6> 
        </div>
        <div className="cards">
        <img src="https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Well decor<br></br>
        Items</h4>
        <h6>Upto 80% Off</h6>
        <h6>Big Discounts</h6>
        </div>
        <div className="cards"><img src="https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Well decor<br></br>
        Items</h4>
        <h6>Upto 80% Off</h6>
        <h6>Big Discounts</h6></div>
        <div className="cards"><img src="https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Well decor<br></br>
        Items</h4>
        <h6>Upto 80% Off</h6>
        <h6>Big Discounts</h6></div>
        <div className="cards"><img src="https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Well decor<br></br>
        Items</h4>
        <h6>Upto 80% Off</h6>
        <h6>Big Discounts</h6></div>
</Carousel>;
<Carousel responsive={responsive}>
  <div className="cards"> <img src="https://rukminim1.flixcart.com/image/416/416/l5fnhjk0/dslr-camera/f/t/m/eos-r10-24-2-r10-canon-original-imagg42fsbgv79da.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Top Mirrorless<br></br>
        Cameras</h4>
        <h6>Shop Now</h6></div>
  <div className="cards"><img src="https://rukminim1.flixcart.com/image/200/200/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Monitors</h4>
        <h6>From ₹7949 </h6>
        <h6>Shop Now</h6></div>
  <div className="cards"> <img src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Printers</h4>
        <h6>From ₹3949 </h6>
        <h6>Shop Now</h6></div>
  <div className="cards"> <img src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Printers</h4>
        <h6>From ₹3949 </h6>
        <h6>Shop Now</h6></div>
        <div className="cards">
        <img src="https://rukminim1.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Gym Essesntials</h4>
        <h6>From ₹139 </h6>
        <h6>Shop Now</h6>
        </div>
        <div className="cards">
        <img src="https://rukminim1.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Remote Control <br></br>Toys</h4>
        <h6>Upto 80% Off</h6>
        <h6>Shop Now</h6> 
        </div>
        <div className="cards">
        <img src="https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Well decor<br></br>
        Items</h4>
        <h6>Upto 80% Off</h6>
        <h6>Big Discounts</h6>
        </div>
        <div className="cards"><img src="https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Well decor<br></br>
        Items</h4>
        <h6>Upto 80% Off</h6>
        <h6>Big Discounts</h6></div>
        <div className="cards"><img src="https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Well decor<br></br>
        Items</h4>
        <h6>Upto 80% Off</h6>
        <h6>Big Discounts</h6></div>
        <div className="cards"><img src="https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Well decor<br></br>
        Items</h4>
        <h6>Upto 80% Off</h6>
        <h6>Big Discounts</h6></div>
</Carousel>;
<Carousel responsive={responsive}>
  <div className="cards"> <img src="https://rukminim1.flixcart.com/image/416/416/l5fnhjk0/dslr-camera/f/t/m/eos-r10-24-2-r10-canon-original-imagg42fsbgv79da.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Top Mirrorless<br></br>
        Cameras</h4>
        <h6>Shop Now</h6></div>
  <div className="cards"><img src="https://rukminim1.flixcart.com/image/200/200/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Monitors</h4>
        <h6>From ₹7949 </h6>
        <h6>Shop Now</h6></div>
  <div className="cards"> <img src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Printers</h4>
        <h6>From ₹3949 </h6>
        <h6>Shop Now</h6></div>
  <div className="cards"> <img src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Printers</h4>
        <h6>From ₹3949 </h6>
        <h6>Shop Now</h6></div>
        <div className="cards">
        <img src="https://rukminim1.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Gym Essesntials</h4>
        <h6>From ₹139 </h6>
        <h6>Shop Now</h6>
        </div>
        <div className="cards">
        <img src="https://rukminim1.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Remote Control <br></br>Toys</h4>
        <h6>Upto 80% Off</h6>
        <h6>Shop Now</h6> 
        </div>
        <div className="cards">
        <img src="https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Well decor<br></br>
        Items</h4>
        <h6>Upto 80% Off</h6>
        <h6>Big Discounts</h6>
        </div>
        <div className="cards"><img src="https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Well decor<br></br>
        Items</h4>
        <h6>Upto 80% Off</h6>
        <h6>Big Discounts</h6></div>
        <div className="cards"><img src="https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Well decor<br></br>
        Items</h4>
        <h6>Upto 80% Off</h6>
        <h6>Big Discounts</h6></div>
        <div className="cards"><img src="https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"alt="hi" height="200px" width="200px;"></img>
        <h4>Well decor<br></br>
        Items</h4>
        <h6>Upto 80% Off</h6>
        <h6>Big Discounts</h6></div>
</Carousel>;

    </div>
     
     
    </div>
  );
}


export default Najeema2;