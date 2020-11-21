import React from "react";
import Carousel from "react-bootstrap/Carousel"
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import "./Home.css"
import img1 from "./resources/img1.jpg"
import img2 from "./resources/img2.jpg"
import img3 from "./resources/img3.jpg"

function Home() {
  const history = useHistory();

  return (
    <div className="container">
      <h1 className="text-center title">Bienvenido a nuestro sitio</h1>
      <h2>
        {" "}
        Aquí podrás comparar entre dos de las más reconocidas entidades
        financieras y asegurarte de tomar la mejor decisión{" "}
      </h2>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="card-horizontal">
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Rápido y sencillo</Card.Header>
          <Card.Body>
            <Card.Title>
              Solo ingresando algunos datos y podrás encontrar la mejor oferta
              para solicitar tu préstamo
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>Tú decides</Card.Header>
          <Card.Body>
            <Card.Title>
              Comparamos entre dos de las principales entidades financieras para
              ayudarte a tomar la mejor decisión.
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card border="success" style={{ width: "18rem" }}>
          <Card.Header> Aprende</Card.Header>
          <Card.Body>
            <Card.Title>
              Conoce las entidades que comaparamos. Da un acercamiento a los
              conceptos más relevantes, y ve la economía desde otro punto de
              vista.
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
