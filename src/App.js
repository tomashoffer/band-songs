import React, {Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario'


function App() {

  // definir state
  const [ busquedaletra, guardarBusquedaLetra ] = useState({});

  useEffect(()=>{
      if(Object.keys(busquedaletra).length === 0) return;

      const consultarApiLetra = async () => {
        const {artista, cancion} = busquedaletra;
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json();
        console.log(resultado.data.lyrics)
      }
      consultarApiLetra()
  }, [busquedaletra])
  return (
    <Fragment>
      <Formulario
      guardarBusquedaLetra={guardarBusquedaLetra}
      />
    </Fragment>
  );
}

export default App;
