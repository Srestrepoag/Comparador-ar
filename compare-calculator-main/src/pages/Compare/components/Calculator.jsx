import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Calculator.css";
import Table from "react-bootstrap/Table"
import Spinner from "react-bootstrap/Spinner"

function CalculatorHookForm() {
  // Initialise the hook
  // Register your input into the hook by invoking the 'register' function
  // Handle-Submit will validate your input before invoking 'onSubmit'
  // Errors is an object provided by Hook Form you can use to show errors while validating inputs

  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([])

  // state to storage the results of the calculation
  const [resultsBogota, setResultsBogota] = useState({
    monthlyPaymentUI: "",
    totalPaymentUI: "",
    totalInterestUI: "",
    isResult: false,
    userInitialData: ""
  });
  const [resultsBancolombia, setResultsBancolombia] = useState({
    monthlyPaymentUI: "",
    totalPaymentUI: "",
    totalInterestUI: "",
    isResult: false,
    userInitialData: ""
  });

  // Hook-form registered fields returns a object with key(name): value, which is sent to the calculateResults
  const onSubmit = (data, e) => {
    calculateResultsBogota(data);
    calculateResultsBancolombia(data)
    e.target.reset();
  };


  useEffect(() => {
    fetch("https://scrapper-sara.herokuapp.com/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  // Calculation Banco de Bogota
  const calculateResultsBogota = ({ amount, years }) => {
    const interestBogota = 10.90
    const userAmount = parseFloat(amount) * 0.7,
      calculatedInterest = parseFloat(interestBogota) / 100 / 12,
      calculatedPayments = parseFloat(years) * 12,
      x = Math.pow(1 + calculatedInterest, -calculatedPayments),
      monthly = (userAmount * calculatedInterest) / (1 - x);

    if (isFinite(monthly)) {
      const monthlyPayment = monthly.toFixed(2),
        totalPayment = (monthly * calculatedPayments).toFixed(2),
        totalInterest = (monthly * calculatedPayments - userAmount).toFixed(2);

      // Set up results to the state to be displayed to the user
      const newResults = { ...resultsBancolombia };
      newResults.monthlyPaymentUI = monthlyPayment;
      newResults.totalPaymentUI = totalPayment;
      newResults.totalInterestUI = totalInterest;
      newResults.isResult = true;
      newResults.userInitialData = (
        <>
          <h2>Resumen de la consulta</h2>
          <h4>
            {" "}
            Monto solicitado: ${new Intl.NumberFormat().format(amount)}, y el banco le prestará el valor de ${new Intl.NumberFormat().format(userAmount)}<br />
            Plazo en años: {years}{" "}<br />
            Necesitas de ingresos minimos de $ {new Intl.NumberFormat().format((monthlyPayment * 100) / 30)}
          </h4>
        </>
      );
      setResultsBogota(newResults);
    }
    return;
  };

  // Calculation Bancolombia
  const calculateResultsBancolombia = ({ amount, years }) => {
    const interestBancolombia = 8.90
    const userAmount = parseFloat(amount) * 0.7,
      calculatedInterest = parseFloat(interestBancolombia) / 100 / 12,
      calculatedPayments = parseFloat(years) * 12,
      x = Math.pow(1 + calculatedInterest, -calculatedPayments),
      monthly = (userAmount * calculatedInterest) / (1 - x);

    if (isFinite(monthly)) {
      const monthlyPayment = monthly.toFixed(2),
        totalPayment = (monthly * calculatedPayments).toFixed(2),
        totalInterest = (monthly * calculatedPayments - userAmount).toFixed(2);

      // Set up results to the state to be displayed to the user
      const newResults = { ...resultsBogota };
      newResults.monthlyPaymentUI = monthlyPayment;
      newResults.totalPaymentUI = totalPayment;
      newResults.totalInterestUI = totalInterest;
      newResults.isResult = true;
      newResults.userInitialData = (
        <>
          <h2>Resumen de la consulta</h2>
          <h4>
            {" "}
            Monto solicitado: ${new Intl.NumberFormat().format(amount)}, y el banco le prestará el valor de ${new Intl.NumberFormat().format(userAmount)}<br />
            Plazo en años: {years}{" "}
          </h4>
        </>
      );
      setResultsBancolombia(newResults);
    }
    return;
  };

  // Clear input fields
  const clearFields = () => {
    const newResultsBogota = { ...resultsBogota };
    newResultsBogota.monthlyPaymentUI = "";
    newResultsBogota.totalPaymentUI = "";
    newResultsBogota.totalInterestUI = "";
    newResultsBogota.isResult = false;
    setResultsBogota(newResultsBogota);
    const newResultsBancolombia = { ...resultsBancolombia };
    newResultsBancolombia.monthlyPaymentUI = "";
    newResultsBancolombia.totalPaymentUI = "";
    newResultsBancolombia.totalInterestUI = "";
    newResultsBancolombia.isResult = false;
    setResultsBancolombia(newResultsBancolombia);
  };

  //HOOK-FORM
  // Each field is required to have a unique name, which will be the key for the registration process

  return (
    <>
      <div className="container text-center">
        <h3>Indicadores tasas actuales</h3>
        {!isLoaded ?
          <>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
            <h4>Cargando datos...</h4>
          </>
          :
          Object.keys(data).map((key) => <h5>{key} : {data[key]}</h5>)
        }
      </div >
      <br />
      <div className="container">
        <form className="myform" onSubmit={handleSubmit(onSubmit)}>
          {/* Form to collect data from the user */}
          {!resultsBogota.isResult && (
            <div className="form-items">
              <div>
                <label id="mylabel">¿Cuál es el valor del inmueble?:</label>
                <input
                  name="amount"
                  placeholder="Ingrese valor"
                  // Include your validation as an object argument of register method)
                  ref={register({
                    required: true,
                    validate: {
                      positive: (value) => parseFloat(value) > 0
                    }
                  })}
                />
                {/* Errors will return when field validation fails. If you have more than one validation type, specify the type */}
                {/* {errors.amount && errors.amount.type === 'required' && (
                <p>Your input is required</p>
              )} */}
                {/* Shortcut - Same meaning as above */}
                {errors.amount?.type === "required" && (
                  <p>Este valor es requerido</p>
                )}

                {errors.amount?.type === "positive" && (
                  <p>Por favor ingresa un numero positivo</p>
                )}
              </div>
              <div>
                <label id="mylabel">Plazo en años:</label>
                <input
                  name="years"
                  placeholder="Plazo en años"
                  ref={register({
                    required: true,
                    validate: {
                      positive: (value) => parseInt(value) > 0
                    }
                  })}
                />
                {errors.years?.type === "required" && (
                  <p>Este valor es requerido</p>
                )}
                {errors.years?.type === "positive" && (
                  <p>Por favor ingresa un número válido positivo</p>
                )}
              </div>
              <input value="Calcular" type="submit" className="button" />
            </div>
          )}
          {/* Form to display the resultsBogota to the user */}
          {resultsBogota.isResult && (
            <div className="form-items">
              {resultsBogota.userInitialData}
              {/* Button to clear the fields */}
              <input
                className="button"
                value="Calcular de nuevo"
                type="button"
                onClick={() => clearFields()}
              />
            </div>
          )}
        </form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Banco</th>
              <th>Tasa interés anual</th>
              <th>Cuota mensual</th>
              <th>Valor total crédito</th>
              <th>Valor total intereses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Banco de Bogotá</td>
              <td>8.9 %</td>
              <td>$ {new Intl.NumberFormat().format(resultsBogota.monthlyPaymentUI)}</td>
              <td>$ {new Intl.NumberFormat().format(resultsBogota.totalPaymentUI)}</td>
              <td>$ {new Intl.NumberFormat().format(resultsBogota.totalInterestUI)}</td>
            </tr>
            <tr>
              <td>Bancolombia</td>
              <td>10.9 %</td>
              <td>$ {new Intl.NumberFormat().format(resultsBancolombia.monthlyPaymentUI)}</td>
              <td>$ {new Intl.NumberFormat().format(resultsBancolombia.totalPaymentUI)}</td>
              <td>$ {new Intl.NumberFormat().format(resultsBancolombia.totalInterestUI)}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default CalculatorHookForm;
