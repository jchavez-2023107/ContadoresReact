import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Constantes y variables
  const persons = [
    {name: 'Edson', surname: 'Aguilar'},
    {name: 'Julian', surname: 'Alvarez'},
    {name: 'Francisco', surname: 'Marroquín'}
  ]

                          //useState = Datos variables... que se pintan en pantalla
  const [count, setCount] = useState(0)
  const [countEj, setCountEj] = useState(0)
                                          //Valor inicial
  const [fullName, setFullName] = useState('Chupina despierto')
  const [sleep, setSleep] = useState(false)
  const [arrayPersons, setArrayPersons] = useState(persons)

  //Métodos y funciones
  const addBautista = ()=>{
    setArrayPersons([
      ...persons, {name: 'Pedrito', surname: 'Bautista'}
    ])
    console.log(persons);
  }

  // Variable de entrada
  const joelito = Math.round(100.49);
  const suma = () => {
    setCountEj((prev) => (prev < (101-joelito) ? prev + joelito : prev))
  }
  const resta = () => {
    setCountEj((prev) => (prev > -(101-joelito) ? prev - joelito : prev))
  }


  //Hooks

  return (
    <>
      <h2>Hola mundo</h2>
      <h3>Me llamo: {fullName}</h3>
      <button onClick={() => {
        if(sleep) {
          setSleep(false)
          setFullName('Chupina dormido')
        }else{
          setSleep(true)
          setFullName('Chupina despierto')
        }
        }
      }>Actualizar nombre</button>

      <button onClick={addBautista}>Agregar a Bautista</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* {} = Inyección de JS, solo puede llevar 1 instrucción */}
            <td>{arrayPersons[0].name}</td>
            <td>{arrayPersons[0].surname}</td>
          </tr>
          <tr>
            <td>{arrayPersons[1].name}</td>
            <td>{arrayPersons[1].surname}</td>
          </tr>
          <tr>
            <td>{arrayPersons[2].name}</td>
            <td>{arrayPersons[2].surname}</td>
          </tr>
          <tr>
            <td>{arrayPersons[3]?.name}</td>
            <td>{arrayPersons[3]?.surname}</td>
          </tr>
        </tbody>
      </table>


      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>

      <button onClick={suma}> Sumar {joelito} </button>
      <h1>Count is {countEj}</h1>
      <button onClick={resta}> Restar {joelito}</button>


      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
