import React from "react";
import Layout from "../../components/layouts/layout";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../styles/service.css";

function Service() {
  const services = [
    {
      icon: "bi bi-truck",
      title: "Fast Delivery",
      description: "We deliver your order promptly to your door, ensuring your food arrives hot and fresh, just as it should be."
    },
    {
      icon: "bi bi-shield-check",
      title: "Quality Guarantee",
      description: "We use only the freshest ingredients, premium meat cuts, and artisanal buns to create the perfect burger experience."
    },
    {
      icon: "bi bi-award",
      title: "Original Recipes",
      description: "Our chef-crafted signature burgers feature unique combinations and homemade sauces you won't find anywhere else."
    },
    {
      icon: "bi bi-credit-card-2-front",
      title: "Easy Payment",
      description: "We offer multiple secure payment options, making your ordering process seamless and worry-free."
    },
    {
      icon: "bi bi-headset",
      title: "24/7 Support",
      description: "Our customer service team is always available to assist with your orders or answer any questions you might have."
    },
    {
      icon: "bi bi-gift",
      title: "Loyalty Program",
      description: "Join our rewards program to earn points on every order and enjoy exclusive discounts and special offers."
    }
  ];

  return (
    <Layout>
      <section className="service_hero">
        <div className="overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center hero_content">
              <h1>Our Premium Services</h1>
              <p>Experience the exceptional. We don't just serve burgers – we deliver an experience crafted with passion and dedicated to your satisfaction.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="service_grid py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section_title">What We Offer</h2>
              <p className="section_subtitle">We're committed to providing the best burger experience with services designed around your needs</p>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="service_card h-100">
                  <Card.Body className="text-center p-4">
                    <div className="service_icon mb-3">
                      <i className={service.icon}></i>
                    </div>
                    <Card.Title className="mb-3">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why_choose_us">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="content_box">
                <h2>Why Choose Our Services?</h2>
                <p className="lead mb-4">We've perfected every aspect of the burger experience, from kitchen to doorstep.</p>
                
                <div className="feature_item d-flex align-items-start mb-4">
                  <div className="feature_icon me-3">
                    <i className="bi bi-clock-history"></i>
                  </div>
                  <div>
                    <h4>Efficient Service</h4>
                    <p>We value your time. Our streamlined process ensures quick preparation and delivery without compromising quality.</p>
                  </div>
                </div>
                
                <div className="feature_item d-flex align-items-start mb-4">
                  <div className="feature_icon me-3">
                    <i className="bi bi-hand-thumbs-up"></i>
                  </div>
                  <div>
                    <h4>Customer Satisfaction</h4>
                    <p>Your satisfaction is our priority. We go the extra mile to ensure your experience exceeds expectations.</p>
                  </div>
                </div>
                
                <div className="feature_item d-flex align-items-start">
                  <div className="feature_icon me-3">
                    <i className="bi bi-heart"></i>
                  </div>
                  <div>
                    <h4>Made With Love</h4>
                    <p>Every burger is crafted with passion and care, creating flavors that keep you coming back.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="image_wrapper">
                <div className="image_box"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta_section text-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2>Ready to Experience Our Service?</h2>
              <p className="mb-4">Order now and discover why our customers keep coming back for more.</p>
              <button className="order_now btn_red">Order Now</button>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Service;
