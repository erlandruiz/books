import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Item } from './components/Item/Item'

// import { NavBar, Item } from './components'



// Etiquetas de apertura y cierre <div> </div> o auto cierre <img />
// images import reactLogo from './assets/react.svg'
// className en lugar de class
// Se escapa javascript con {}
// Estilos son un objeto {} que puede estar en la estructura del componente o directamente en la etiqueta/componente
//Eventos y estilos en camelCase


function App() {
  const [count, setCount] = useState(0);
  const[active, setActive] = useState(false);
  const [form, setFom] = useState({});
  const numero = 5;
  const styleButton ={
    marginTop:'25px',
  };

  const handleCount = ()=>{
    setCount(count +1)
  }

  return (
    <div>
      {/* <NavBar/> */}
      <div className='container'>
        {/* <Item/> */}

      <div onClick={()=>{setActive(!active)}}
      
      style={
        {
          height:200,
          width:200,
          background: active ? 'red' : 'blue'
        }
      }/>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ "https://www.gandhi.com.mx/media/logo/stores/1/logo-gandhi-52-aniv.png"} 
          className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      {/* <span   style ={{
          display: 'block',
          fontSize: '10rem'
        }} >
          {numero}
       

      </span>


      <h1>Vite + React+ Erland</h1> */}
      <div className="card">
        {/* <button style={styleButton} onClick={() => setCount((count) => count + 1)}> */}
        <button style={styleButton} onClick={() => handleCount()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>



      </div>

  )
}

export default App
