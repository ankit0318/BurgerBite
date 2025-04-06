import React, { useState } from "react";
import Layout from "../../components/layouts/layout";
import { Container, Row, Col, Nav, Tab, Button } from "react-bootstrap";
import "../../styles/menu.css";
import Cards from "../../components/layouts/cards";

// Import images
import Burger1 from "../../assets/menu/burger-11.jpg";
import Burger2 from "../../assets/menu/burger-12.jpg";
import Burger3 from "../../assets/menu/burger-13.jpg";
import Burger4 from "../../assets/menu/burger-14.jpg";
import Burger5 from "../../assets/menu/burger-15.jpg";
import Burger6 from "../../assets/menu/burger-16.jpg";
import Burger7 from "../../assets/menu/burger-17.jpg";
import Burger8 from "../../assets/menu/burger-18.jpg";

function Menu() {
  // Categories for menu filtering
  const [activeCategory, setActiveCategory] = useState("all");

  // Menu items with categories
  const menuItems = [
    {
      id: "1",
      category: "bestseller",
      image: Burger1,
      title: "Crispy Chicken",
      paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
      rating: 5,
      price: 99.15,
    },
    {
      id: "2",
      category: "bestseller",
      image: Burger2,
      title: "Ultimate Bacon",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 4.5,
      price: 99.32,
    },
    {
      id: "3",
      category: "vegan",
      image: Burger3,
      title: "Black Sheep",
      paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
      rating: 4,
      price: 69.15,
    },
    {
      id: "4",
      category: "vegan",
      image: Burger4,
      title: "Vegan Burger",
      paragraph: "Plant-based patty, vegan cheese, lettuce, tomato, vegan mayo",
      rating: 3.5,
      price: 99.25,
    },
    {
      id: "5",
      category: "beef",
      image: Burger5,
      title: "Double Beef Burger",
      paragraph: "2 Angus beef patties, cheddar cheese, mustard, pickles, tomatoes",
      rating: 4.2,
      price: 129.25,
    },
    {
      id: "6",
      category: "chicken",
      image: Burger6,
      title: "Grilled Chicken Deluxe",
      paragraph: "Grilled chicken breast, honey mustard, lettuce, tomatoes, pickles",
      rating: 4.1,
      price: 89.18,
    },
    {
      id: "7",
      category: "beef",
      image: Burger7,
      title: "Smokey House",
      paragraph: "Smoked beef patty, cheddar cheese, BBQ sauce, onion rings",
      rating: 4.7,
      price: 109.19,
    },
    {
      id: "8",
      category: "beef",
      image: Burger8,
      title: "Classic Burger",
      paragraph: "Beef patty, cheddar cheese, ketchup, mustard, pickles, onion",
      rating: 4.3,
      price: 89.12,
    },
  ];

  // Filter menu items based on active category
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  // Function to render rating stars
  const renderRatingIcons = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating > 0.5) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
        rating--;
      } else if (rating > 0 && rating < 1) {
        stars.push(<i key={"half"} className="bi bi-star-half"></i>);
        rating--;
      } else {
        stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
      }
    }
    return stars;
  };

  return (
    <Layout>
      <section className="menu_hero">
        <div className="overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center hero_content">
              <h1>Our Delicious Menu</h1>
              <p>Explore our wide selection of handcrafted burgers, sides, and beverages</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="menu_content py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section_title">Explore Our Burgers</h2>
              <p className="section_subtitle">Each burger is crafted with premium ingredients and our signature touch</p>
            </Col>
          </Row>

          <Row className="justify-content-center mb-4">
            <Col lg={8}>
              <div className="category_filter text-center">
                <Button 
                  className={`filter_btn ${activeCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('all')}
                >
                  All
                </Button>
                <Button 
                  className={`filter_btn ${activeCategory === 'bestseller' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('bestseller')}
                >
                  Bestsellers
                </Button>
                <Button 
                  className={`filter_btn ${activeCategory === 'beef' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('beef')}
                >
                  Beef
                </Button>
                <Button 
                  className={`filter_btn ${activeCategory === 'chicken' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('chicken')}
                >
                  Chicken
                </Button>
                <Button 
                  className={`filter_btn ${activeCategory === 'vegan' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('vegan')}
                >
                  Vegan
                </Button>
              </div>
            </Col>
          </Row>

          <Row>
            {filteredItems.map((item) => (
              <Cards
                key={item.id}
                image={item.image}
                rating={item.rating}
                title={item.title}
                paragraph={item.paragraph}
                price={item.price}
                renderRatingIcons={renderRatingIcons}
              />
            ))}
          </Row>
        </Container>
      </section>

      <section className="special_offers">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="offer_card">
                <div className="offer_content">
                  <h3>Weekend Special</h3>
                  <h4>Buy 2 Get 1 Free</h4>
                  <p>Every Saturday and Sunday, enjoy our special weekend offer on selected burgers.</p>
                  <button className="order_now">Order Now</button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="offer_card offer_card_alt">
                <div className="offer_content">
                  <h3>Family Bundle</h3>
                  <h4>Save 20%</h4>
                  <p>Get 4 burgers, 2 large fries, and 4 drinks at a special discounted price.</p>
                  <button className="order_now btn_red">Order Now</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Menu;
