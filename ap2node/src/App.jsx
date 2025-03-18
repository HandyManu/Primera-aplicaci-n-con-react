import React from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <h1>Mi Tarjeta de Presentación</h1>
      <div className="card">
        <img
          src="https://student-photographs.s3.us-east-2.amazonaws.com/20220416.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVL5BYAQGNBT62GM4%2F20250318%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T212559Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=a593b2fe0ba0afeb78016707145063567dd2be8bd70efb2bf8b67a37ed6127ec"alt="Foto de perfil" className="card-image"/>
        <div className="card-content">
          <h2>Manuel Ortega</h2>
          <h3>Desarrollador Web </h3>
          <p>
            Soy un profesional apasionado por la tecnología y el diseño, con
            años de experiencia en crear soluciones digitales innovadoras. Mi
            objetivo es transformar ideas en realidades con código limpio y un
            diseño atractivo.
          </p>
          <p>
            <strong>Habilidades:</strong>
          </p>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Redux, Node.js</li>
            <li>Figma, Adobe Photoshop, Illustrator</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;