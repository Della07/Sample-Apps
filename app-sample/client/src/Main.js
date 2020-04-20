import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Container, Col } from "react-bootstrap";
import "../src/style.css";

class Main extends Component {
  render() {
    return (
      <div className="bg">
        <Col>
          <Row className="">
            <div className="col-lg-7 d-sm-none d-md-block"></div>
            <div className="col-lg-5 col-12 overlay">
              <Container className="text-light py-5 px-2 p-sm-5 text-center text-lg-left">
                <div className="p-sm-1 p-3">
                  <h1 className="display-4 text-primary">Hello, world!</h1>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis blandit turpis cursus in.
                  </p>
                  <hr className="my-4 bg-primary" />
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="pt-3">
                  <Button size="lg" variant="outline-light" className="mr-3">
                    <Link to="/signup">SignUp</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline-light"
                    className="text-primary"
                  >
                    <Link to="/login" className="">
                      Login
                    </Link>
                  </Button>
                </div>
              </Container>
            </div>
          </Row>
        </Col>
      </div>
    );
  }
}

export default Main;
