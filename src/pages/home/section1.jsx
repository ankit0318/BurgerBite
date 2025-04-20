import { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import fallbackImage from "../../assets/hero/bg.jpg";
import deliciousBurger from "../../assets/hero/Delicious Food Image.jfif";
import backgroundImage from "../../assets/hero/bg4.jpg";
import priceBadge from "../../assets/hero/price-badge-yellow.png";

function Section1() {
  // State to track background image loading
  const [bgLoaded, setBgLoaded] = useState(false);
  const sectionRef = useRef(null);
  const bgImageRef = useRef(null);

  // Add image loading optimizations
  useEffect(() => {
    // DOM elements animation
    const heroContent = document.querySelector(".hero_main");
    const burgerImage = document.querySelector(".burger-image-container");
    const thumbnails = document.querySelectorAll(".burger-thumbnail");

    if (heroContent) heroContent.classList.add("animate-fade-in");
    if (burgerImage) burgerImage.classList.add("animate-slide-in");

    thumbnails.forEach((thumbnail, index) => {
      setTimeout(() => {
        thumbnail.classList.add("animate-pop");
      }, 200 * index);
    });

    // Implement Intersection Observer to load the image only when section is about to come into view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Create a new image to preload
          const img = new Image();

          // Setup load event before setting src
          img.onload = () => {
            setBgLoaded(true);
          };

          // Use modern format with fallback
          // First check if browser supports WebP by setting it
          img.src = backgroundImage;

          // Disconnect observer once image starts loading
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    ); // Start loading 200px before the element comes into view

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.disconnect();
      }
    };
  }, []);

  // Function to handle background image loading
  const handleBackgroundLoad = () => {
    if (bgImageRef.current) {
      setBgLoaded(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`hero_section ${bgLoaded ? "bg-loaded" : "bg-loading"}`}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hidden image preloader */}
      <img
        ref={bgImageRef}
        src={backgroundImage}
        alt="background"
        onLoad={handleBackgroundLoad}
        style={{ display: "none" }}
      />

      {/* Blurred small image that shows immediately while main image loads */}
      <div
        className="background-placeholder"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url(${fallbackImage}) center/cover no-repeat`,
          filter: "blur(10px)",
          transform: "scale(1.1)", // Prevents blur edges from showing
          opacity: bgLoaded ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      />

      {/* Main background image - loaded with JavaScript */}
      <div
        className="background-image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: bgLoaded
            ? `url(${backgroundImage}) center/cover no-repeat`
            : "none",
          opacity: bgLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in",
          willChange: "opacity", // Performance hint for browsers
        }}
      />

      {/* Gradient overlay for better text contrast */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.4) 100%)",
          zIndex: 1,
        }}
      ></div>

      {/* Decorative elements */}
      <div
        className="decorative-circles"
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "2px dashed rgba(255,255,255,0.1)",
          zIndex: 1,
        }}
      ></div>

      <div
        className="decorative-circles"
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          border: "2px dashed rgba(255,255,255,0.1)",
          zIndex: 1,
        }}
      ></div>

      <Container fluid style={{ position: "relative", zIndex: 2 }}>
        <Row className="align-items-center">
          {/* Left Content Column */}
          <Col lg={6} md={6} className="ps-md-5 ps-lg-5">
            <div
              className="hero_main text-left"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              {/* Special badge */}
              <div
                className="special-tag"
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(90deg, #e67e22 0%, #f39c12 100%)",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  marginBottom: "1.5rem",
                  boxShadow: "0 4px 10px rgba(243, 156, 18, 0.3)",
                  letterSpacing: "1px",
                }}
              >
                #1 RATED BURGERS
              </div>

              <h1
                style={{
                  fontSize: "clamp(3rem, 5vw, 4.5rem)",
                  color: "#ffffff",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
                  marginBottom: "1.5rem",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  lineHeight: "1.1",
                  position: "relative",
                }}
              >
                THE ULTIMATE
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #e67e22 0%, #f39c12 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  BURGER HAVEN
                </span>
                <div
                  style={{
                    width: "80px",
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #e67e22 0%, #f39c12 100%)",
                    marginTop: "10px",
                  }}
                ></div>
              </h1>

              <p
                style={{
                  color: "#e0e0e0",
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                  maxWidth: "500px",
                  marginBottom: "2.5rem",
                  marginLeft: "0",
                  lineHeight: "1.8",
                  fontWeight: "300",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                Welcome to our Burger Paradise, where every bite is a journey
                into flavor perfection! Indulge in a symphony of premium
                ingredients, expertly crafted patties, and mouthwatering sauces.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <button
                  className="order_now"
                  style={{
                    background:
                      "linear-gradient(90deg, #e67e22 0%, #f39c12 100%)",
                    color: "#ffffff",
                    fontSize: "clamp(0.9rem, 1vw, 1rem)",
                    padding: "15px 32px",
                    borderRadius: "30px",
                    border: "none",
                    fontWeight: "700",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0px 8px 15px rgba(230, 126, 34, 0.3)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0px 12px 20px rgba(230, 126, 34, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0px 8px 15px rgba(230, 126, 34, 0.3)";
                  }}
                >
                  Order Now
                </button>

                <button
                  className="view_menu"
                  style={{
                    backgroundColor: "transparent",
                    color: "#ffffff",
                    fontSize: "clamp(0.9rem, 1vw, 1rem)",
                    padding: "15px 32px",
                    borderRadius: "30px",
                    border: "2px solid #e67e22",
                    fontWeight: "700",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(230, 126, 34, 0.1)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  View Menu
                </button>
              </div>
            </div>
          </Col>

          {/* Right Content Column - Featured Burger Image */}
        </Row>
      </Container>

      {/* CSS animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .animate-slide-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        
        .animate-pop {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
      `}</style>
    </section>
  );
}

export default Section1;
