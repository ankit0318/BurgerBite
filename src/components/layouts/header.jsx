import React, { useState } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../../styles/headerStyle.css";
import Logo from "../../assets/logo/burger.png";

function Header() {
  const location = useLocation();
  const [nav, setNav] = useState(false);

  const changeOnScroll = () => {
    const scrollValue = document?.documentElement.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };
  window.addEventListener("scroll", changeOnScroll);

  // Sample cart items - in a real app, this would come from state/context
  const cartItems = [
    { id: 1, name: "Crispy Chicken", price: 99.15, quantity: 1 },
    { id: 2, name: "Ultimate Bacon", price: 99.32, quantity: 1 },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
      <i className="bi bi-cart fs-5" style={{ color: "#fff" }}></i>
      <em className="roundpoint">{cartItems.length}</em>
    </div>
  ));
  CustomToggle.displayName = "CustomToggle";

  // Check if current path matches the nav link
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
        style={{
          backgroundColor: "#000000",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          padding: "12px 0",
        }}
      >
        <Container className="header-container">
          <Navbar.Brand href="/">
            <div className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
              <span id="span1" style={{ color: "#FFC107" }}>
                Burger
              </span>
              <span id="span2" style={{ color: "#fff" }}>
                Bite
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                as={Link}
                to="/"
                className={isActive("/") ? "active-nav" : ""}
                style={{
                  color: isActive("/") ? "#FFC107" : "#ffffff",
                  position: "relative",
                }}
              >
                Home
                {isActive("/") && <div className="nav-indicator"></div>}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/menu"
                className={isActive("/menu") ? "active-nav" : ""}
                style={{
                  color: isActive("/menu") ? "#FFC107" : "#ffffff",
                  position: "relative",
                }}
              >
                Menu
                {isActive("/menu") && <div className="nav-indicator"></div>}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={isActive("/about") ? "active-nav" : ""}
                style={{
                  color: isActive("/about") ? "#FFC107" : "#ffffff",
                  position: "relative",
                }}
              >
                About
                {isActive("/about") && <div className="nav-indicator"></div>}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/shop"
                className={isActive("/shop") ? "active-nav" : ""}
                style={{
                  color: isActive("/shop") ? "#FFC107" : "#ffffff",
                  position: "relative",
                }}
              >
                Shop
                {isActive("/shop") && <div className="nav-indicator"></div>}
              </Nav.Link>

              <div className="d-flex align-items-center ms-3 nav-icons">
                <Link to="#" className="nav-icon">
                  <i
                    className="bi bi-search"
                    style={{ color: "#fff", fontSize: "1.1rem" }}
                  ></i>
                </Link>

                <Link to="/login" className="nav-icon mx-3">
                  <i
                    className="bi bi-person"
                    style={{ color: "#fff", fontSize: "1.1rem" }}
                  ></i>
                </Link>

                <Dropdown align="end">
                  <Dropdown.Toggle as={CustomToggle} id="dropdown-cart" />
                  <Dropdown.Menu className="cart-dropdown">
                    <div className="cart-header">
                      <h6 className="mb-0">
                        Your Cart ({cartItems.length} items)
                      </h6>
                    </div>

                    <div className="cart-items">
                      {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                          <Dropdown.Item
                            key={item.id}
                            className="cart-item"
                            as="div"
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h6 className="item-name">{item.name}</h6>
                                <span className="item-quantity">
                                  {item.quantity} × ₹{item.price.toFixed(2)}
                                </span>
                              </div>
                              <div className="item-actions">
                                <button
                                  className="remove-btn"
                                  aria-label="Remove item"
                                >
                                  <i className="bi bi-x"></i>
                                </button>
                              </div>
                            </div>
                          </Dropdown.Item>
                        ))
                      ) : (
                        <div className="empty-cart py-4 ">
                          <i
                            className="bi bi-cart-x d-block text-center mb-2"
                            style={{
                              fontSize: "1.8rem",
                              color: "var(--light-red)",
                            }}
                          ></i>
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
                          <Link
                            to="/cart"
                            className="btn view-cart-btn"
                            style={{ fontWeight: "bold" }}
                          >
                            View Cart
                          </Link>
                          <Link to="/checkout" className="btn checkout-btn"  style={{ fontWeight: "bold" }}>
                            Checkout
                          </Link>
                        </div>
                      </div>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
