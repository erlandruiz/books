
import './App.css'
import { NavBar, ItemCount, Item, ItemListContainer } from './components/index.js';
import { Detail } from './pages/Detail';



import { Home } from './pages/Home'






// Etiquetas de apertura y cierre <div> </div> o auto cierre <img />
// images import reactLogo from './assets/react.svg'
// className en lugar de class
// Se escapa javascript con {}
// Estilos son un objeto {} que puede estar en la estructura del componente o directamente en la etiqueta/componente
//Eventos y estilos en camelCase


function App() {

  const handlecart = (qty)=>{
    console.log('la cantiad es' , qty);
  }
 

  return (
    <div>
      <NavBar />

    
      <Home/>
      <Detail/>

      {/* <div className='item-padre'>
      <div className='container-item'>

<ItemCount stock={10} onAdd={handlecart}/>

</div>

      </div> */}
      
      {/* <ItemCount stock={0} onAdd={handlecart}/> */}
    
  



      </div>

  );
}

export default App
