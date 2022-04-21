import React, { useEffect, useState } from 'react'

import appFirebase from '../credenciales'

import {getFirestore, collection, getDocs, deleteDoc, doc} from 'firebase/firestore'
const db = getFirestore(appFirebase)

const Lista = () => {

    const [lista, setLista] = useState([])

    useEffect(()=>{
        const getLista = async()=>{
            try {
                const querySnapshot = await getDocs(collection(db,'comidas'))
                const docs = []
                querySnapshot.forEach((doc)=>{
                    docs.push({...doc.data(), id: doc.id})
                })
                setLista(docs)
            } catch (error) {
                console.log(error);
            }

        }
        getLista();
    },[lista])

    const eliminarComida = async(id)=>{
        await deleteDoc(doc(db, "comidas", id))
    }

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((list) => (
            <tr key={list.id}>
              <td>{list.nombre}</td>
              <td>{list.precio}Bs.</td>
              <td>
                <button className="btn btn-danger" onClick={()=>eliminarComida(list.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lista