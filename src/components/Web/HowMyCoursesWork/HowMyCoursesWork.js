import React from "react";
import { Row, Col, Card } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  KeyOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./HowMyCoursesWork.scss";

export default function HowMyCoursesWork() {
  return (
    <Row className="how-my-courses-work">
      <Col lg={24} className="how-my-courses-work__title">
        <h2>Knowledge</h2>
        <h3>Short knowledge summary</h3>
      </Col>

      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon={<ClockCircleOutlined className="ccoutlined" />}
              title="Java"
              description="Java"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<KeyOutlined className="koutlined" />}
              title="Kotlin"
              description="Kotlin"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<MessageOutlined className="msgoutlined" />}
              title="Swift"
              description="Swift"
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon={<UserOutlined className="ussoutlined" />}
              title="React"
              description="React"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<DollarOutlined className="ddoulined" />}
              title="C#"
              description="C#"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<CheckCircleOutlined className="ccoutlineds" />}
              title="Node JS"
              description="Node JS"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function CardInfo(props) {
  const { icon, title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="how-my-courses-work__card">
      <div className="ifss">{icon}</div>
      <Meta title={title} description={description} />
    </Card>
  );
}
