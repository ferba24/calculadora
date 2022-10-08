import { useState } from "react";
import "./App.css";
import Boton from "./componentes/Boton.jsx";
import { Clear } from "./componentes/Clear.jsx";
import { Pantalla } from "./componentes/Pantalla.jsx";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const operadores = ["*", "/", "+", "-"];

  const agregarInput = (val) => {
    // comprobamos que no sean 2 operadores los ingresados
    if (operadores.includes(input.at(-1)) && operadores.includes(val)) {
      alert("no puedes agregar dos operadores");
    } else {
      setInput(input + val);
    }
  };

  const calcularResultado = () => {
    if (input) {
      console.log(input);
      setInput(evaluate(input));
    } else {
      alert("Agrega un valor correcto antes de calcular el resultado");
    }
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Clear manejarClear={() => setInput("")}>LIMPIAR</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
