import React from "react";
import Layout from "../../components/layouts/layout";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/home.css";

function Shop() {
  // Sample shop items
  const shopItems = [
    {
      id: 1,
      name: "Burger T-Shirt",
      price: 599,
      image: "https://via.placeholder.com/300x300?text=Burger+T-Shirt",
      description: "Comfortable cotton t-shirt with burger logo",
    },
    {
      id: 2,
      name: "Burger Mug",
      price: 299,
      image: "https://via.placeholder.com/300x300?text=Burger+Mug",
      description: "Ceramic mug with our signature burger design",
    },
    {
      id: 3,
      name: "Gift Card",
      price: 500,
      image: "https://via.placeholder.com/300x300?text=Gift+Card",
      description: "Perfect gift for burger lovers",
    },
    {
      id: 4,
      name: "Cap",
      price: 399,
      image: "https://via.placeholder.com/300x300?text=Burger+Cap",
      description: "Stylish cap with embroidered burger logo",
    },
  ];

  return (
    <Layout>
      <section className="menu_hero">
        <div className="overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center hero_content">
              <h1>Burger Shop</h1>
              <p>Check out our exclusive merchandise and gift cards</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="py-5"
        style={{ backgroundColor: "var(--light-grey)" }}
      >
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2
                style={{
                  color: "var(--light-red)",
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                }}
              >
                Our Merchandise
              </h2>
              <p
                style={{
                  color: "var(--grey)",
                  maxWidth: "700px",
                  margin: "0 auto",
                }}
              >
                Wear your love for our burgers or give the perfect gift to
                fellow burger enthusiasts
              </p>
            </Col>
          </Row>

          <Row>
            {shopItems.map((item) => (
              <Col md={6} lg={3} className="mb-4" key={item.id}>
                <Card
                  className="h-100"
                  style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title
                      style={{
                        fontFamily: "var(--oswald-font)",
                        fontSize: "1.5rem",
                      }}
                    >
                      {item.name}
                    </Card.Title>
                    <Card.Text style={{ color: "var(--grey)", flex: 1 }}>
                      {item.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span
                        style={{
                          color: "var(--light-black)",
                          fontWeight: "600",
                          fontSize: "1.2rem",
                        }}
                      >
                        ₹{item.price}
                      </span>
                      <button
                        className="order_now"
                        style={{ padding: "8px 16px", fontSize: "0.9rem" }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="mt-5">
            <Col lg={12} className="text-center">
              <h3
                style={{
                  fontFamily: "var(--oswald-font)",
                  color: "var(--light-black)",
                  marginBottom: "1.5rem",
                }}
              >
                Looking for our food menu?
              </h3>
              <Link to="/menu">
                <button className="btn_red order_now">View Food Menu</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Shop;
