import React from "react";
import { useState } from "react";
/* definiendo estilos en constante */

/* estilo para usuario logueado */
const loggedStyle = {
    color: 'blue'
};
/* estilo para usuario no logueado */
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


const Greetingstyled = (props) => {
/* generamos un estado para el componente y asi controlar si el usuario esta o no logueado */

    const [logged, setLogged ] = useState(false)
    
    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ? (<p>Hola, {props.name}</p>) : (<p>Porfavor loguea para ingresar</p>)}
           
            <button onClick={() => {
                console.log('boton pulsado login')
                setLogged(!logged)
            }}>{logged ? 'Logout' : 'Login' }</button>
        </div>
    )
}

export default Greetingstyled;