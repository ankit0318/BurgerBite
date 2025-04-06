import React, { useState } from "react";
import Layout from "../../components/layouts/layout";
import { Container, Row, Col, Form, Button, Card, Tab, Nav } from "react-bootstrap";
import "../../styles/login.css";
import { Link } from "react-router-dom";

function Login() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <Layout>
      <section className="auth_section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="auth_card">
                <Card.Body className="p-4 p-md-5">
                  <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                    <Nav variant="tabs" className="auth_tabs mb-4">
                      <Nav.Item>
                        <Nav.Link eventKey="login">Login</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">Register</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="text-center mb-4">
                          <h2 className="auth_title">Welcome Back!</h2>
                          <p className="auth_subtitle">Login to your account to order your favorite burgers</p>
                        </div>
                        
                        <Form>
                          <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                              type="email" 
                              placeholder="Enter your email" 
                              className="auth_input"
                            />
                          </Form.Group>
                          
                          <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                              type="password" 
                              placeholder="Enter your password" 
                              className="auth_input"
                            />
                          </Form.Group>
                          
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <Form.Check 
                              type="checkbox" 
                              label="Remember me" 
                              className="auth_checkbox"
                            />
                            <Link to="#" className="forgot_link">Forgot password?</Link>
                          </div>
                          
                          <Button className="auth_button w-100 mb-3">
                            Login
                          </Button>
                          
                          <div className="text-center">
                            <p className="mb-0 mt-3">Don't have an account? 
                              <span 
                                className="switch_auth_link"
                                onClick={() => setActiveTab("register")}
                              > Sign up</span>
                            </p>
                          </div>
                        </Form>
                      </Tab.Pane>
                      
                      <Tab.Pane eventKey="register">
                        <div className="text-center mb-4">
                          <h2 className="auth_title">Create Account</h2>
                          <p className="auth_subtitle">Join BurgerBite to start ordering delicious burgers</p>
                        </div>
                        
                        <Form>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                  type="text" 
                                  placeholder="Enter first name" 
                                  className="auth_input"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                  type="text" 
                                  placeholder="Enter last name" 
                                  className="auth_input"
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          
                          <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                              type="email" 
                              placeholder="Enter your email" 
                              className="auth_input"
                            />
                          </Form.Group>
                          
                          <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control 
                              type="tel" 
                              placeholder="Enter phone number" 
                              className="auth_input"
                            />
                          </Form.Group>
                          
                          <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                              type="password" 
                              placeholder="Create a password" 
                              className="auth_input"
                            />
                          </Form.Group>
                          
                          <Form.Group className="mb-4">
                            <Form.Check 
                              type="checkbox" 
                              label="I agree to the Terms of Service and Privacy Policy" 
                              className="auth_checkbox"
                            />
                          </Form.Group>
                          
                          <Button className="auth_button w-100 mb-3">
                            Create Account
                          </Button>
                          
                          <div className="text-center">
                            <p className="mb-0 mt-3">Already have an account? 
                              <span 
                                className="switch_auth_link"
                                onClick={() => setActiveTab("login")}
                              > Login</span>
                            </p>
                          </div>
                        </Form>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Login;
