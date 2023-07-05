import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import wapQuickView from "../../../assets/img/png/waplogin.png";
import adivinaelnumeroQuickView from "../../../assets/img/png/adivinaelnumero.jpg";
import sgdQuickView from "../../../assets/img/png/SGDLogin.png";
import ruteandoQuickView from "../../../assets/img/png/ruteando-quickview.png";
import puntoscharffQuicView from "../../../assets/img/png/puntoscharff-quickview.png";
import hitosscharffQuickView from "../../../assets/img/png/hitosscharff.png";
import psQuickView from "../../../assets/img/png/psshopimg.png";
import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Proyects quickview</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={ruteandoQuickView}
              title="Ruteando"
              subtitle="Entertainment Mobile App"
              link="https://play.google.com/store/apps/details?id=com.JH.ruteandoapp"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={hitosscharffQuickView}
              title="Hitos"
              subtitle="Status changer Mobile App"
              link="https://play.google.com/store/apps/details?id=com.JuanHervas.HitoScharff"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={sgdQuickView}
              title="SGD Valija"
              subtitle="Barcode Scanner Mobile App"
              link="https://play.google.com/store/apps/details?id=com.JH.SGDScharffAgo"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={wapQuickView}
              title="Wap Reborn"
              subtitle="Pick up packages Mobile App"
              link="https://play.google.com/store/apps/details?id=com.JH.wapreborn"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={adivinaelnumeroQuickView}
              title="Adivina El Número"
              subtitle="Juego de entretenimiento"
              link="https://play.google.com/store/apps/details?id=com.jh.adivinaelnumero"
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={puntoscharffQuicView}
              title="Punto Scharff Bot"
              subtitle="CRUD(SQL) - Chat-bot"
              link="https://www.facebook.com/messages/t/100695861308072"
            />
          </Col>
          <Col md={6} />
          <Col md={6} />
          <Col md={6}>
            <CardCourse
              image={psQuickView}
              title="Personal Shopper Bot"
              subtitle="Informative - Chat-bot"
              link="https://bot.dialogflow.com/e38f9999-8733-45c5-a22d-a42f07d8e399"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="/blog">
          <Button>Ver más</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>INGRESAR</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
