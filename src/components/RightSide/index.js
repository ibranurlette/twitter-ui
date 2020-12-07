import React from "react";
import { Col } from "react-bootstrap";

import Login from "./Login";
import Register from "./Register";

const RightSide = () => {
  return (
    <Col md={5} className="mt-3">
      {/* Form Login */}
      <Login />
      {/* Register */}
      <Register />
    </Col>
  );
};

export default RightSide;
