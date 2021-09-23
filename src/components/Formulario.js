import React, { useState } from 'react'

const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda, guardarBusqueda] = useState({
        artista:'',
        cancion:''
    })

    const [error, guardarError] = useState(false);

    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda, 
            [e.target.name] : e.target.value,
        })
    }

    const {artista, cancion} = busqueda;

    const buscarInfo = e => {
         e.preventDefault();
         if(artista.trim() === '' || cancion.trim() === ''){
             guardarError(true)
             return;
         }
         guardarError(false)
         guardarBusquedaLetra(busqueda)
    } 

    return ( 
        <div className="bg-info">
                    { error ? <p className="alert alert-danger text-center p-2">
                        Todos los campos son obligatorios
                    </p> : null}
            <div className="container">
                <div className="row">
                    <form onSubmit={buscarInfo} className="col card text-white bg-transparent mb-5 pt-5 pb-5">
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Artista</label>
                                        <input 
                                        type="text" 
                                        className="form-control"
                                        name='artista'
                                        placeholder="Nombre Artista"
                                        value={artista}
                                        onChange={e=> actualizarState}
                                         />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                        <label htmlFor="">Canción</label>
                                        <input 
                                        type="text" 
                                        className="form-control"
                                        name='cancion'
                                        placeholder="Nombre Canción"
                                        value={cancion}
                                        onChange={e=> actualizarState}
                                         />
                                    </div>
                                </div>
                            </div>
                            <button
                            type="submit"
                            className="btn btn-primary float-right"
                            >Buscar </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;