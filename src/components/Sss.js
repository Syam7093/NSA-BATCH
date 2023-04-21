
// import React from 'react'
// import { Navbar,Container,Nav,Form,NavDropdown} from 'react-bootstrap'

// import * as Icon from 'react-bootstrap-icons';
// import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
// import Grocery from './Grocery';



// function Sss() {
//   return (
    
    
       
   
//     <BrowserRouter>
    
//       <nav>
//       <Navbar bg="primary" expand="lg" >
//       <Container fluid>
//         <Navbar.Brand ><img src="flip.png" height="60px" alt="sai"></img></Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           ><Form className="d-flex sai">
//           <Form.Control
//             type="search"
//             placeholder="Search for products,Brands and more"
//             className="me-2"
//             aria-label="Search"
//           />
         
//         </Form>
//             <Nav.Link  className="navColor">Home</Nav.Link>
//             <Nav.Link href="#action2" className="navColor">Become a Seller</Nav.Link>
//             <Nav.Link href="#action2" className="navColor">Wishlist</Nav.Link>
//             <Nav.Link href="#action2" className="navColor">Notification</Nav.Link>
//             <NavDropdown title="More"  id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Orders</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                FlipcartPlus
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 SuperCoin Zone
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action5">
//                 Coupons
//               </NavDropdown.Item>
              
//             </NavDropdown>
//             <Nav.Link href="#action2" className="navColor"><Icon.Cart4
//       color="gold"
//       size={25}
//       className="align-top"></Icon.Cart4>Cart</Nav.Link>
//           </Nav>
          
          
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//       </nav>
//       <Routes>
//       <Route path="/home" element={<Grocery></Grocery>}></Route>
      
//       </Routes>
//       <div>
//       <div className="allGroceryImg">
//         <div className="imgGrocery">
       
//     <img src="https://nammamaligai.com/wp-content/uploads/2021/01/surf-excel-matic-powder-500x500-435x500.jpg" alt="sajd" height="100px;" width="100px;"></img>
//       <Link to="/home"> <h5>Grocery</h5></Link>
//         </div>
//         <div className="imgGrocery">
       
//     <img src="https://cdn.shopify.com/s/files/1/0606/3751/1923/products/iPhone_14_Product_RED_Pure_Back_iPhone_14_Product_RED_Pure_Front_2-up_Screen__USEN_1200x1200_crop_center.jpg?v=1665031440" alt="sajd" height="100px;" width="100px;"></img>
//         <h5>Mobiles</h5>
//         </div>
//         <div className="imgGrocery">
       
//     <img src="https://static.vecteezy.com/system/resources/previews/002/823/625/original/fashion-runway-girls-flat-color-illustration-models-demonstrate-new-trends-clothes-and-accessories-new-collection-catwalk-females-isolated-cartoon-character-on-white-background-vector.jpg" alt="sajd" height="100px;" width="100px;"></img>
//         <h5>Fashion</h5>
//         </div>
//         <div className="imgGrocery">
       
//     <img src="https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ=" height="100px;" width="100px;" alt="sajd"></img>
//         <h5>Electronics</h5>
//         </div>
//         <div className="imgGrocery">
       
//     <img src="https://thumbs.dreamstime.com/b/furniture-white-background-22617447.jpg" alt="sajd" height="100px;" width="100px;"></img>
//         <h5>Home</h5>
//         </div>
//         <div className="imgGrocery">
       
//     <img src="https://media.istockphoto.com/id/1174598609/photo/set-of-contemporary-house-appliances-isolated-on-white.jpg?s=612x612&w=0&k=20&c=bBMILbCpLkhIxbL7sAAXaFOaFaSXFCt80ccHgl7iiWM=" alt="sajd" height="100px;" width="100px;"></img>
//         <h5>Appliances</h5>
//         </div>
//         <div className="imgGrocery">
       
//     <img src="https://img.freepik.com/premium-photo/modern-airplane-isolated-white-background_501530-4325.jpg"alt="sajd" height="100px;" width="100px;"></img>
//         <h5>Travel</h5>
//         </div>
//         <div className="imgGrocery">
       
//     <img src="https://previews.123rf.com/images/frender/frender1609/frender160900822/62755519-special-offer-3d-3d-illustration-isolated-on-white-background.jpg" height="100px;" width="100px;" alt="sajd"></img>
//         <h5>Top Offers</h5>
//         </div>
//         <div className="imgGrocery">
       
//     <img src="https://media.istockphoto.com/id/952081702/photo/cute-pink-bear-doll-with-bow-isolated-on-white-background-with-shadow-reflection-playful.jpg?s=1024x1024&w=is&k=20&c=reUSB8Z2UBM8ZU8wKac8qbKgUfQY8ewd0q_YQuBT3bQ=" height="100px;" width="100px;" alt="sajd"></img>
//         <h5>Beauty&Toys</h5>
//         </div>
//         <div className="imgGrocery">
       
//     <img src="https://c4.wallpaperflare.com/wallpaper/734/826/462/yamaha-yamaha-yzf-r1-motorcycle-vehicle-wallpaper-preview.jpg" height="100px;" width="100px;" alt="sajd"></img>
//         <h5>Two Wheelers</h5>
//         </div>
      
//       </div>
//       </div>
//       </BrowserRouter>
//   )
// }

// export default Sss





import React from 'react'
import { Navbar,Container,Nav,Form,NavDropdown} from 'react-bootstrap'

import * as Icon from 'react-bootstrap-icons';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
// import Najeema from './components/Najeema';
import Grocery from './Grocery';
import Mobiles from './Mobiles';



function Sss() {
  return (
    
    
       
   
    <BrowserRouter>
    
      <nav>
      <Navbar bg="primary" expand="lg" >
      <Container fluid>
        <Navbar.Brand ><img src="flip.png" height="60px" alt="sai"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ><Form className="d-flex sai">
          <Form.Control
            type="search"
            placeholder="Search for products,Brands and more"
            className="me-2"
            aria-label="Search"
          />
         
        </Form>
            <Nav.Link  className="navColor">Home</Nav.Link>
            <Nav.Link href="#action2" className="navColor">Become a Seller</Nav.Link>
            <Nav.Link href="#action2" className="navColor">Wishlist</Nav.Link>
            <Nav.Link href="#action2" className="navColor">Notification</Nav.Link>
            <NavDropdown title="More"  id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Orders</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               FlipcartPlus
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                SuperCoin Zone
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Coupons
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#action2" className="navColor"><Icon.Cart4
      color="gold"
      size={25}
      className="align-top"></Icon.Cart4>Cart</Nav.Link>
          </Nav>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </nav>
      <Routes>
     <Route path="/grocery1" element={<Grocery></Grocery>}></Route>
      <Route path="/mobile" element={<Mobiles></Mobiles>}></Route>
      
      </Routes>
      <div>
      <div className="allGroceryImg">
        <div className="imgGrocery">
       
    <img src="https://nammamaligai.com/wp-content/uploads/2021/01/surf-excel-matic-powder-500x500-435x500.jpg" alt="sajd" height="100px;" width="100px;"></img>
      <Link to="/grocery1"> <h5>Grocery</h5></Link>
        </div>
        <div className="imgGrocery">
       
    <img src="https://cdn.shopify.com/s/files/1/0606/3751/1923/products/iPhone_14_Product_RED_Pure_Back_iPhone_14_Product_RED_Pure_Front_2-up_Screen__USEN_1200x1200_crop_center.jpg?v=1665031440" alt="sajd" height="100px;" width="100px;"></img>
       <Link to="/mobile"><h5>Mobiles</h5></Link> 
        </div>
        <div className="imgGrocery">
       
    <img src="https://static.vecteezy.com/system/resources/previews/002/823/625/original/fashion-runway-girls-flat-color-illustration-models-demonstrate-new-trends-clothes-and-accessories-new-collection-catwalk-females-isolated-cartoon-character-on-white-background-vector.jpg" alt="sajd" height="100px;" width="100px;"></img>
        <h5>Fashion</h5>
        </div>
        <div className="imgGrocery">
       
    <img src="https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ=" height="100px;" width="100px;" alt="sajd"></img>
        <h5>Electronics</h5>
        </div>
        <div className="imgGrocery">
       
    <img src="https://thumbs.dreamstime.com/b/furniture-white-background-22617447.jpg" alt="sajd" height="100px;" width="100px;"></img>
        <h5>Home</h5>
        </div>
        <div className="imgGrocery">
       
    <img src="https://media.istockphoto.com/id/1174598609/photo/set-of-contemporary-house-appliances-isolated-on-white.jpg?s=612x612&w=0&k=20&c=bBMILbCpLkhIxbL7sAAXaFOaFaSXFCt80ccHgl7iiWM=" alt="sajd" height="100px;" width="100px;"></img>
        <h5>Appliances</h5>
        </div>
        <div className="imgGrocery">
       
    <img src="https://img.freepik.com/premium-photo/modern-airplane-isolated-white-background_501530-4325.jpg"alt="sajd" height="100px;" width="100px;"></img>
        <h5>Travel</h5>
        </div>
        <div className="imgGrocery">
       
    <img src="https://previews.123rf.com/images/frender/frender1609/frender160900822/62755519-special-offer-3d-3d-illustration-isolated-on-white-background.jpg" height="100px;" width="100px;" alt="sajd"></img>
        <h5>Top Offers</h5>
        </div>
        <div className="imgGrocery">
       
    <img src="https://media.istockphoto.com/id/952081702/photo/cute-pink-bear-doll-with-bow-isolated-on-white-background-with-shadow-reflection-playful.jpg?s=1024x1024&w=is&k=20&c=reUSB8Z2UBM8ZU8wKac8qbKgUfQY8ewd0q_YQuBT3bQ=" height="100px;" width="100px;" alt="sajd"></img>
        <h5>Beauty&Toys</h5>
        </div>
        <div className="imgGrocery">
       
    <img src="https://c4.wallpaperflare.com/wallpaper/734/826/462/yamaha-yamaha-yzf-r1-motorcycle-vehicle-wallpaper-preview.jpg" height="100px;" width="100px;" alt="sajd"></img>
        <h5>Two Wheelers</h5>
        </div>
      
      </div>
      </div>
      </BrowserRouter>
  )
}

export default Sss


