import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Ejemplo de Tarjetas con React y Vite</h1>
      <div className="card">
        <img
          src="https://via.placeholder.com/300"
          alt="Card Visual"
          className="card-image"
        />
        <div className="card-content">
          <h2>Título de la Tarjeta</h2>
          <p>Esta es una descripción para la tarjeta.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
