import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/png/no-avatar.png";

import "./ReviewsCourses.scss";

export default function ReviewsCourses() {
  return (
    <Row className="reviews-courses">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="reviews-courses__title">
          <h2>Aún viendo que poner 123</h2>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="To do"
                subtitle="To do"
                avatar={AvatarPersona}
                review="To do"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Aun viendo que poner"
                subtitle="Aun viendo que poner 123"
                avatar={AvatarPersona}
                review="7 is the only number D for which the equation 2 n − D = x 2 has more than two solutions for n and x natural. In particular, the equation 2 n − 7 = x 2 is known as the Ramanujan-Nagell equation. 7 is the only dimension, besides the familiar 3, in which a vector cross product can be defined."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="To do"
                subtitle="To do"
                avatar={AvatarPersona}
                review="To do"
              />
            </Col>
          </Row>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="To do"
                subtitle="To do"
                avatar={AvatarPersona}
                review="To do"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="To do"
                subtitle="To do"
                avatar={AvatarPersona}
                review="To do"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="To do"
                subtitle="To do"
                avatar={AvatarPersona}
                review="To do"
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props;
  const { Meta } = Card;

  return (
    <Card className="reviews-courses__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  );
}
