import React from "react";
import Layout from "../../components/layouts/layout";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/about.css";
import { Link } from "react-router-dom";

function About() {
  // Team members data
  const teamMembers = [
    {
      name: "John Burger",
      role: "Master Chef",
      description: "With 15 years of experience in crafting the perfect burger, John brings passion and innovation to every recipe.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=684&q=80"
    },
    {
      name: "Sarah Miller",
      role: "Culinary Director",
      description: "Sarah ensures that every ingredient meets our premium standards and continuously develops exciting new flavor profiles.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=684&q=80"
    },
    {
      name: "Michael Chen",
      role: "Restaurant Manager",
      description: "Michael oversees daily operations, ensuring that every customer receives exceptional service and satisfaction.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=684&q=80"
    }
  ];

  return (
    <Layout>
      <section className="about_hero">
        <div className="overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center hero_content">
              <h1>Our Burger Story</h1>
              <p>From humble beginnings to becoming your favorite burger joint</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="our_story py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="story_image"></div>
            </Col>
            <Col lg={6}>
              <div className="content_box">
                <h2>How We Started</h2>
                <p className="lead">Founded in 2010, BurgerHub began with a simple mission: create the most delicious burgers using the freshest ingredients.</p>
                <p>What started as a small food truck has grown into multiple locations, but our commitment to quality hasn't changed. We still hand-select our ingredients, make our sauces from scratch, and grill each patty to perfection.</p>
                <p>Our founder's passion for the perfect burger has been passed down to every team member, ensuring that each burger served carries the same dedication to excellence that built our reputation.</p>
              </div>
            </Col>
          </Row>
          
          <Row className="align-items-center flex-column-reverse flex-lg-row">
            <Col lg={6}>
              <div className="content_box">
                <h2>Our Philosophy</h2>
                <p className="lead">We believe that a great burger is more than just food—it's an experience that brings people together.</p>
                <p>That's why we put so much care into everything we do—from selecting the perfect bun-to-patty ratio to training our staff to provide the warmest welcome. Every detail matters in creating moments of joy around our tables.</p>
                <p>We're committed to sustainability, supporting local farmers, and reducing our environmental footprint while serving up smiles with every meal.</p>
              </div>
            </Col>
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="philosophy_image"></div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="values_section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2>Our Core Values</h2>
              <p>These principles guide everything we do at BurgerHub</p>
            </Col>
          </Row>
          
          <Row>
            <Col md={4} className="mb-4">
              <div className="value_card">
                <div className="value_icon">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <h3>Passion</h3>
                <p>We pour our hearts into creating food that people love and memories that last a lifetime.</p>
              </div>
            </Col>
            
            <Col md={4} className="mb-4">
              <div className="value_card">
                <div className="value_icon">
                  <i className="bi bi-star-fill"></i>
                </div>
                <h3>Quality</h3>
                <p>We never compromise on ingredients or preparation, ensuring excellence in every bite.</p>
              </div>
            </Col>
            
            <Col md={4} className="mb-4">
              <div className="value_card">
                <div className="value_icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h3>Community</h3>
                <p>We strive to be a positive force in our neighborhood, supporting local causes and creating gathering spaces.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="team_section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2>Meet Our Team</h2>
              <p>The talented people behind your favorite burgers</p>
            </Col>
          </Row>
          
          <Row>
            {teamMembers.map((member, index) => (
              <Col md={4} key={index} className="mb-4">
                <div className="team_card">
                  <div className="member_img">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member_info">
                    <h3>{member.name}</h3>
                    <h5>{member.role}</h5>
                    <p>{member.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="cta_section text-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2>Come Taste The Difference</h2>
              <p className="mb-4">Visit any of our locations to experience what makes BurgerHub special.</p>
              <Link to="/menu">
                <button className="order_now btn_red">Explore Our Menu</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default About;
