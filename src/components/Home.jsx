import { useEffect, useState } from 'react'

export const Home = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      //Creando (Lógica)
    
      /* return () => {
        //Desmonta o se elimina
      } */
    }, []) //Dependencia de actualización
        //Arreglo de dependencias

  return (
    <div>
        Contador de ventas.
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Zapatos</td>
                    <td>1500</td>
                    <td><button>Comprar</button></td>
                </tr>
                <tr>
                    <td>Playera</td>
                    <td>800</td>
                    <td><button>Comprar</button></td>
                </tr>
                <tr>
                    <td>Laptop</td>
                    <td>5000</td>
                    <td><button>Comprar</button></td>
                </tr>
            </tbody>
        </table>
        {/* <div>Home</div>
        <h1>Alejandro</h1> */}
    </div>
  )
}
