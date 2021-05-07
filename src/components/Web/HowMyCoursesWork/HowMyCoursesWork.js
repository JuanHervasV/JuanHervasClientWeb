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
              description="Cursos de entre 10 y 30 horas y cada clase del curso con duración máxima de 15 minutos, faciles de llevar en tu día a día de aprendizaje."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<KeyOutlined className="koutlined" />}
              title="Kotlin"
              description="Accede a los cursos en cualquier momento, desde cualquier lugar sin importar día y hora."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<MessageOutlined className="msgoutlined" />}
              title="Swift"
              description="Aprende de los demás dejando tus dudas para que profesores y compañeros te ayuden."
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon={<UserOutlined className="ussoutlined" />}
              title="React"
              description="Aprende y mejora tu perfil para mantenerte informado de actualizaciones."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<DollarOutlined className="ddoulined" />}
              title="C#"
              description="Obtén el curso que necesitas por solo 9.99 y ten acceso a el por tiempo ilimitado y soporte ilimitado."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<CheckCircleOutlined className="ccoutlineds" />}
              title="Node JS"
              description="Al completar tu un curso recibirás una certificación que te expedirá Udemy en PDF."
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
