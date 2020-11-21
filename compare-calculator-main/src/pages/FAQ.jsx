import React from "react";
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"


function FAQ() {
  return (
    <div className="container">
      <h1 className="title text-center">Preguntas frecuentes</h1>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            ¿Qué es mejor, una cooperativa o un banco?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Aunque la mayoría de los bancos y cooperativas ofrecen los mismos servicios financieros como cuentas de ahorro, tarjeta de crédito y préstamos, estas entidades tienen metas y objetivos diferentes que debes conocer para que así escojas el que más te convenga.

            Los bancos son entidades financieras que tienen como objetivo obtener ganancias del negocio bancario. Es decir, son entidades con fines de lucro en donde los accionistas o inversores son los propietarios del banco. Los accionistas son las personas que compran o invierten en una parte de la empresa para que esta pueda funcionar.

            Por otro lado, las cooperativas de ahorro y crédito son controladas por las personas o socios que utilizan sus servicios. Las cooperativas son organizaciones sin fines de lucro y sus principios se basan en la cooperación entre socios para obtener ganancias.

            Por lo general las cooperativas ofrecen altos intereses en cuentas de ahorro y tienen cargos más bajos. Mientras que los bancos son más accesibles y proveen una gran variedad de servicios que algunas cooperativas no proveen como: cuentas de ahorro para el retiro, tarjetas de crédito para viajes, aplicaciones, etc.

            En cuanto a oficinas y cajeros automáticos los bancos tienen más sucursales y herramientas online que las cooperativas. Ya que la mayoría de las cooperativas no están disponibles en todos los departamentos.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            ¿Qué es un crédito de libre inversión?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Es un crédito adquirido en un banco u otra entidad financiera, que el cliente puede utilizar para cubrir cualquier fin deseado, sin tener que presentar explicaciones o cumplir con requerimientos específicos para su uso.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            ¿Cuál es la mejor opción para un crédito de libre inversión?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>La mejor opción para un crédito de libre inversión es el producto que por lo general tiene menor tasa de interés y que cubre el monto que necesitas.

            El libre uso del crédito, te da la oportunidad de comprar lo que necesites o gastar en un viaje. Por ejemplo puedes comprar un carro, para tu uso personal o para trabajar.
</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            ¿Qué hacer si me negaron el crédito de libre inversión?

          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Revisa o pregunta a la entidad financiera el motivo de la negación del crédito. Lo más natural es que no cumplas con algún requisito. Si el rechazo fue por falta de vida crediticia o alguna deuda impaga, inicia a crear una vida crediticia o pagar la deuda que tienes.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default FAQ;
