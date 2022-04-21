import React from 'react'

import firebaseApp from '../credenciales'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(firebaseApp)

const Login = () => {

    const handlerSubmit = async (e) => {
      e.preventDefault();
      const correo = e.target.email.value;
      const contraseña = e.target.password.value;

      await signInWithEmailAndPassword(auth, correo, contraseña);
    };

  return (
    <div className="container margentop">
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h2>Inicia Sesión</h2>
          <form onSubmit={handlerSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="ingresar email"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="ingresa la contraseña"
                id="password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login