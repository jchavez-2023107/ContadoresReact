import { useEffect, useState } from 'react'

export const Home = () => {
    const [count, setCount] = useState(0)
    const [buying, setBuying] = useState(false)
    const [total, setTotal] = useState(0)
    const [products, setProducts] = useState([])

    const buy = (price) => {
        setBuying(true)
        alert('Gracias por tu compra');

        //Aquí es donde actualizamos el contador de ventas y el total vendido
        setCount(prevCount => prevCount+1)
        setTotal(prevTotal => prevTotal + price)
    }

    const getUsers = async ()=>{
        //Consultar al API
        //1ra forma utilizando Fetch (Puentes de conexión entre Front y Back)
        const response = await fetch('https://fakestoreapi.com/products/')
        const results = await response.json()
        setProducts(results)
        

        //2da forma utilizando Axios
    }

    useEffect(() => {
    //Creando (Lógica)
    //Si la variable buying cambia se ejecuta este código
    if (buying){
        console.log("Se hizo la compra");
    } else {
        console.log('No hay compras');
    }
    setBuying(false)


      /* return () => {
        //Desmonta o se elimina
      } */
    }, [buying]) //Dependencia de actualización
        //Arreglo de dependencias


    useEffect(() => { //Efecto secundario
        //Consultar al API
        getUsers();


        alert('Cargando datos desde la BD')
        setTimeout(() => {
            //En la BD ya hay 500 ventas
            setCount(500)
        }, 1500);
    }, []) //Si {} está vacío, solo se ejecuta una vez (Al cargar el componente)

  return (
    <div>
        <span>Ventas totales: {count}</span>
        <br />
        <span>Total vendido: Q{total}</span>
        <br /><br />
        <button>Obtener más productos</button>
        <br /><br />
        <h2>Contador de ventas.</h2>
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
                    <td><button onClick={() => buy(1500)}>Comprar</button></td>
                </tr>
                <tr>
                    <td>Playera</td>
                    <td>800</td>
                    <td><button onClick={() => buy(800)}>Comprar</button></td>
                </tr>
                <tr>
                    <td>Laptop</td>
                    <td>5000</td>
                    <td><button onClick={() => buy(5000)}>Comprar</button></td>
                </tr>
                {
                    /* For: solamente itera */
                    /* Map: Itera y genera un arreglo en base a las iteraciones */
                    products.map((product)=> (
                        <>
                            <tr>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td><button onClick={() => buy(product.price)}> Comprar </button></td>
                            </tr>
                        </>
                    ))
                }
            </tbody>
        </table>
        {/* <div>Home</div>
        <h1>Alejandro</h1> */}
    </div>
  )
}
