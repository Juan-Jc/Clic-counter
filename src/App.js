import './App.css';
import logo from './imagenes/logo-jc-white.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };


  return (
    <div className="App">
     <div className='jc-logo-contenedor'>
       <img className='jc-logo' 
            src={logo}
            alt='logo de jotace' />
            <div className='contenedor-principal'>
              <Contador 
              numClics={numClics}/>
              <Boton
                texto='Clic'
                esClic= {true}
                manejarClic={manejarClic} />
              <Boton
                texto='Reiniciar'
                esClic={false}
                manejarClic={reiniciarContador} />
            </div>
     </div>
    </div>
  );
}

export default App;
