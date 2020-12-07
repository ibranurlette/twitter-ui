import React from "react";
import { Col, Container, Button, Image } from "react-bootstrap";

import logo from "../../images/logo.png";

const Register = () => {
  return (
    <Col className="mt-5">
      <Container>
        <div className="ml-5 mr-5">
          <Image src={logo} rounded style={{ width: 70, height: 70 }} />

          <h1 style={{ fontWeight: "bold" }}>
            See what’s happening <br />
            in the world right now
          </h1>
          <h5 style={{ fontWeight: "bold" }} className="mt-5">
            Join Twitter today.
          </h5>
          <div className="mb-2">
            <Button size="lg" block variant="primary" style={{ marginTop: 32 }}>
              <b>Sign up</b>
            </Button>
          </div>
          <div>
            <Button size="lg" variant="outline-primary" block>
              <b>Log in</b>
            </Button>
          </div>
        </div>
      </Container>
    </Col>
  );
};

export default Register;
