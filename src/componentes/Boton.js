import React from 'react';
import '../hojas-de-estilo/Boton.css'

function Boton ({texto, esClic,manejarClic}) {
  return (
    <button className={ esClic ? 'boton-clic' : 'boton-reiniciar' }
    onClick={manejarClic}>
      {texto}
    </button>
  )
}

export default Boton;