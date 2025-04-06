import React,{ useState } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/headerStyle.css";
import Logo from "../../assets/logo/burger.png";

function Header() {

  const [nav, setNav] = useState();
  const changeOnScroll = () => {
    const scrollValue = document?.documentElement.scrollTop;
    scrollValue > 100 ? setNav(true): setNav(false);
  }
  window.addEventListener("scroll", changeOnScroll);

  // Sample cart items - in a real app, this would come from state/context
  const cartItems = [
    { id: 1, name: "Crispy Chicken", price: 99.15, quantity: 1 },
    { id: 2, name: "Ultimate Bacon", price: 99.32, quantity: 1 }
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Custom toggle for the dropdown
  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <div
      className="cart"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      style={{ cursor: "pointer" }}
    >
      <i className="bi bi-cart fs-5"></i>
      <em className="roundpoint">{cartItems.length}</em>
    </div>
  ));

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true? "sticky": ""}`}>
        <Container>
          <Navbar.Brand href="/">
            <div className="logo" >
              <img src={Logo} alt="Logo" className="img-fluid " />
              <span id="span1">Burger</span><span id="span2">Bite</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/service">
                Service
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About US
              </Nav.Link>
              <Nav.Link className="login" as={Link} to="/login">
                Login
              </Nav.Link>
              
              <Dropdown align="end">
                <Dropdown.Toggle as={CustomToggle} id="dropdown-cart" />
                <Dropdown.Menu className="cart-dropdown">
                  <div className="cart-header">
                    <h6 className="mb-0">Your Cart ({cartItems.length} items)</h6>
                  </div>
                  
                  <div className="cart-items">
                    {cartItems.length > 0 ? (
                      cartItems.map(item => (
                        <Dropdown.Item key={item.id} className="cart-item" as="div">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="item-name">{item.name}</h6>
                              <span className="item-quantity">{item.quantity} × ₹{item.price.toFixed(2)}</span>
                            </div>
                            <div className="item-actions">
                              <button className="remove-btn" aria-label="Remove item">
                                <i className="bi bi-x"></i>
                              </button>
                            </div>
                          </div>
                        </Dropdown.Item>
                      ))
                    ) : (
                      <div className="empty-cart py-4 ">
                        <i className="bi bi-cart-x d-block text-center mb-2" style={{ fontSize: '1.8rem', color: 'var(--light-red)' }}></i>
                        <p className="text-center mb-0">Your cart is empty</p>
                      </div>
                    )}
                  </div>
                  
                  {cartItems.length > 0 && (
                    <div className="cart-footer">
                      <div className="d-flex justify-content-between cart-total">
                        <span>Total:</span>
                        <strong>₹{totalPrice.toFixed(2)}</strong>
                      </div>
                      <div className="d-grid gap-2">
                        <Link to="/cart" className="btn view-cart-btn">View Cart</Link>
                        <Link to="/checkout" className="btn checkout-btn">Checkout</Link>
                      </div>
                    </div>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
