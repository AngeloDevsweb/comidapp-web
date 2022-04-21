import React from 'react'
import Formulario from './Formulario'
import Lista from './Lista'

import firebaseApp from '../credenciales'
import {getAuth, signOut} from 'firebase/auth'
import Ventas from './Ventas'

const auth = getAuth(firebaseApp)

const Home = ({correoUsuario}) => {
  return (
    <div className="container">
      <p className=''>
        Bienvenido, <strong>{correoUsuario}</strong> Haz iniciado sesion{" "}
      </p>

      <button className="btn btn-primary" onClick={() => signOut(auth)}>
        Cerrar Sesion
      </button>
      <hr />

      <h1 className='text-center mt-3 mb-4 text-white'>ComidApp</h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h2>Agregar Nuevas Comidas</h2>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Formulario/>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h2>Lista de Comidas</h2>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {/* lista de las comidas */}
                <Lista/>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h2>Ventas</h2>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Ventas/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home