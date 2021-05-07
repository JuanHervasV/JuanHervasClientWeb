import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
import wordPress from "../../../assets/img/jpg/wordpress.jpg";
import prestaShop from "../../../assets/img/jpg/prestashop-1-7.jpg";
import cssGrid from "../../../assets/img/jpg/css-grid.jpg";
import ruteandoQuickView from "../../../assets/img/png/ruteando-quickview.png";
import puntoscharffQuicView from "../../../assets/img/png/puntoscharff-quickview.png";

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
              image={ruteandoQuickView}
              title="Hitos"
              subtitle="Status changer Mobile App"
              link="https://courses.agustinnavarrogaldon.com/react-native-expo"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={ruteandoQuickView}
              title="SGD Valija"
              subtitle="Barcode Scanner Mobile App"
              link="https://courses.agustinnavarrogaldon.com/javascript"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={ruteandoQuickView}
              title="Wap Reborn"
              subtitle="Pick up packages Mobile App"
              link="https://courses.agustinnavarrogaldon.com/wordpress"
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
              image={puntoscharffQuicView}
              title="Proteo Bot"
              subtitle="Informative - Chat-bot"
              link="https://www.facebook.com/messages/t/105285874227515"
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
