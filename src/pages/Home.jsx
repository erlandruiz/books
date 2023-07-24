import { useEffect, useState } from "react"
import { getBooks } from "../lib/books.request";
import { ItemListContainer } from "../components";


export const Home = ()=>{
    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true)

    //Poner en efectos peticiones o cosa asincromas
    
    useEffect(()=>{

        getBooks()
        .then( res=> {
            setIsLoading(false)
            setProducts(res)
            
        })
    }, []);


    // useEffect(() => {

    
    //   console.log(products)
    
     
    // }, [products])
    

    return (
    <div>Pagina Principal

          <div className='container'>
            <h5>{isLoading ? 'Cargando...' :'Listo'}</h5>

      <ItemListContainer products={products}/>

      </div>

        {/* <button onClick={()=>setProducts([...products, 'Producto uno', 'Productos dos '])}>Agregar productos</button> */}
    </div>
    );
}