import { useEffect, useState } from "react"


export const Home = ()=>{
    const [products, setProducts] = useState([]);

    //Poner en efectos peticiones o cosa asincromas
    
    useEffect(()=>{

        console.log('Monatando')
    }, []);


    useEffect(() => {

        if(products.length)
      console.log(products)
    
     
    }, [products])
    

    return <div>Pagina Principal

        <button onClick={()=>setProducts([...products, 'Producto uno', 'Productos dos '])}>Agregar productos</button>
    </div>
}