/* eslint-disable no-unused-vars */
// Home.jsx
import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import FirstImg from "../assets/1.png";
import SecImg from "../assets/2.png";
import ThirdImg from "../assets/3.png";
import FourImg from "../assets/4.png";
import FiveImg from "../assets/5.png";
import SixImg from "../assets/6.png";
import SevenImg from "../assets/7.png";
import EightImg from "../assets/8.png";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <Container fluid>
      <Row>
        <Col xs="12">
          <img src={FirstImg} width="100%" />
        </Col>
        <Col xs="12">
          <img src={SecImg} width="100%" />
        </Col>
        <Col xs="12">
          <img src={ThirdImg} width="100%" />
        </Col>
        <Col xs="12">
          <img src={FourImg} width="100%" />
        </Col>
        <Col xs="12">
          <img src={FiveImg} width="100%" />
        </Col>
        <Col xs="12">
          <img src={SixImg} width="100%" />
        </Col>
        <Col xs="12">
          <img src={SevenImg} width="100%" />
        </Col>
        <Col xs="12">
          <img src={EightImg} width="100%" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
