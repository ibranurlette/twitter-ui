import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import { BsSearch } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiChat1Line } from "react-icons/ri";

import bacgkLeft from "../images/bacgkleft.png";

const titleInfo = [
  {
    icon: <BsSearch />,
    name: "Follow your interests.",
  },
  {
    icon: <BsFillPeopleFill />,
    name: "Hear what people are talking about.",
  },
  {
    icon: <RiChat1Line />,
    name: "Join the conversation.",
  },
];

const BackgroundLeft = () => {
  return (
    <Col md={7}>
      <Card className="bg-dark text-white justify-content-center align-items-center">
        <Card.Img src={bacgkLeft} alt="Card image" />
        <Card.ImgOverlay id="title">
          <Row>
            <Col>
              {titleInfo.map((data) => {
                return (
                  <h3 className="mb-5">
                    <b className="mr-3">{data.icon}</b>
                    <b>{data.name}</b>
                  </h3>
                );
              })}
            </Col>
          </Row>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default BackgroundLeft;
