import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Col className="mt-3">
      <Form>
        <Row>
          <Col>
            <Form.Label>Phone, email, or username</Form.Label>
            <Form.Control placeholder="Phone, email, or username" />
          </Col>
          <Col>
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Password" />
            <Form.Text>Forgot password?</Form.Text>
          </Col>
          <Col>
            <Button
              variant="outline-primary"
              className="pl-2 pr-2"
              style={{ marginTop: 32 }}
            >
              <b>Log in</b>
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
};

export default Login;
