import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <div>
      <h1 className="mt-5 mb-5 text-center title">
        Edúcate
      </h1>
      {/* Project One */}
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="https://blogs.iadb.org/efectividad-desarrollo/wp-content/uploads/sites/23/2019/10/EducacionFinanciera.jpg"
              alt
            />
          </a>
        </div>
        <div className="col-md-5">
          <h1>¿Para qué me sirve?</h1>
          <h4>
            {" "}
            La educación financiera es el proceso proceso por el cual las
            personas mejoran su comprensión de los conceptos: los productos y
            servicios financieros, desarrollando las habilidades y la confianza
            para ser más conscientes tanto de los riesgos financieros como de
            las oportunidades, y así tomar decisiones informadas para mejorar su
            bienestar.
          </h4>
        </div>
      </div>
      {/* /.row */}
      <hr />
      {/* Project Two */}
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="https://static-blogs.hoy.es/wp-content/uploads/sites/87/2018/06/las-diferencias-entre-el-cr%C3%A9dito-y-el-pr%C3%A9stamo.jpg"
              alt
            />
          </a>
        </div>
        <div className="col-md-5">
          <h1>¿Préstamo o crédito?</h1>
          <h4>
            Son productos financieros muy parecidos, pero no iguales. La
            diferencia básica entre uno y otro es que el préstamo es una
            cantidad que un prestamista entrega al cliente y el crédito es un
            límite de dinero del cual el consumidor puede disponer o no. Eso sí,
            no es la única característica que les hace distintos,pues los
            intereses también juegan un papel clave.
          </h4>
        </div>
      </div>
      {/* /.row */}
      <hr />
      {/* Project Three */}
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src=" https://retos-directivos.eae.es/wp-content/uploads/2017/12/iStock-540376942-e1514130352114.jpg"
              alt
            />
          </a>
        </div>
        <div className="col-md-5">
          <h1>¿Quién concede un préstamo?</h1>
          <h4>
            A la hora de pedir un préstamo o un crédito, en Colombia existen
            varias opciones. Cada una de ellas tiene unas características
            diferentes que se adaptarán en mayor medida a tus necesidades.
          </h4>
          <h4> 1. Bancos nacionales y extranjeros. </h4>
          <h4>2. Cajas de ahorro. </h4>
          <h4>
            3. Cooperativas de ahorro y crédito.
            <p />
          </h4>
          <h4>4. Empresas de capital privado.</h4>
          <h4>
            5. Empresas de tarjetas de crédito apoyadas por instituciones
            financieras.
          </h4>
          <h4>6. Préstamos entre particulares.</h4>
          <h4>
            7. Grandess supermercados y tiendas: no ofrecen una cantidad de
            dinero, pero sí financian la compra de algunos productos y su tipo
            de interés suele ser del 0%{" "}
          </h4>
          <p />
        </div>
      </div>
      {/* /.row */}
      <hr />
      {/* Project Four */}
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="https://www.ekosnegocios.com/image/posts/header/9256.jpg"
              alt
            />
          </a>
        </div>
        <div className="col-md-5">
          <h1>¿Qué documentos necesitas?</h1>
          <h4>
            Debes tener en cuenta que todo esto varía según la entidad con la
            que solicites el préstamo,sin embargo, de manera general es
            necesario presentar:
          </h4>
          <h4>1.Documento de identidad.</h4>
          <h4>2.Contrato de trabajo.</h4>
          <h4>
            3.Trabajadores autónomos: Deben presentar el certificado de alta, el
            justificante de pago de la cuota de la Seguridad Social o la última
            declaración del IVA.
          </h4>
          <h4>
            4.Trabajadores dependientes: Tienen que presentar las 2 o 3 últimas
            nóminas.
          </h4>
          <h4>
            5.En algunas ocasiones: escrituras de la casa, contrato de alquiler,
            declaración de bienes o declaración jurada del patrimonio.
          </h4>

        </div>
      </div>
      {/* /.row */}
      <hr />
      {/* /.container */}
      {/* Footer */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center">
            Copyright © Comparador 2020
          </p>
        </div>
        {/* /.container */}
      </footer>
    </div>
  );
}

export default Blog;
