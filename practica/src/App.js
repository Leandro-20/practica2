import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  //contador
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };
//cambiar color
  const [color, setColor] = useState('blue');

  const cambiarC = () => {
    setColor(color === 'blue' ? 'red': 'blue');
  };
//lista de compras
  const lista =[]
  const [compras, setCompra]=useState();
  const listaA = ()=>{
  const valor = document.getElementById("lista").value
  lista.push(compras)
  setCompra(valor)
  console.log(lista)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{contador}</p>
        <button onClick={incrementar}>incrementar</button>
        <button style={{ backgroundColor: color }} onClick={cambiarC} >color</button>
        <input id="lista"></input>
        <button onClick={listaA}>Agregar a la lista</button>
        <p></p>
      </header>
    </div>
  );
}

export default App;
