import React, { useState, useContext } from "react";
/* use Context */
// usar contexto y pasarselo a inferiores


const miContexto = React.createContext(null)

const Componente1 = () => {
/* dispone de un contexto que va a tener un valor que recibe desde el padre
 */
/* lo inicializamos vacio que va a rellenarse con los datos del contexto del padre */
    
    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es {state.token}</h1>
             {/*  pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
      
    )
}

const Componente2 = () => {

   const state = useContext(miContexto);
    return (
        <div>
            <h2>la sesion es : { state.sesion }</h2>
        </div>
    )
}

export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: '1234567',
        sesion: 1,
    }

    /* creamos el estado de este componente */
    const [sesionData, setSesionData] = useState(estadoInicial)

    function actualizarSesion() {
        setSesionData({
            token: 'asdav654',
            sesion: sesionData.sesion + 1
        })
    }

    return (
        <div>
            <h1>ejemplo de usestate y usecontext</h1>
            <miContexto.Provider value={sesionData}>
                {/* todo lo que esta aqui dentro puede leer los datos de sesionData ademas de actualizarse.
                ademas si se actualiza los componentes de aqui tambien lo actualizan */}
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar Sesion</button>
            </miContexto.Provider>
        </div>
    )
}