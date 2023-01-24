/* ejemplo de uso hooj useState */
/* crear un componente de tipo funcion y acceder a su estado privado a traves de un hook y ademas, poder modificarlo */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    /* valor inicial para un contador */

    const valorInicial = 0;
    /* valor inicial para una persona */

    const personaInicial = {
        nombre: 'Gianina',
        email: '123@gmail.com'
    }
    /* queremos que el VALORINICIAL y PERSONAINICIAL sean parte del estado del componente para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente 
    
    const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
    */
    
    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    /* funcion para actualizar el estado privado que contiene el contador */
    function incrementarContador() {
        setContador(contador + 1);
    }

    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Pepe',
                email: '555@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useState ()</h1>
            <h2>Contador: {contador} </h2>
            <h2>Datos de la persona</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: { persona.email}</h3>

            {/* bloque de botones para actualizar el estado */}
            <div>
                <button onClick={incrementarContador}>Incrementar contador</button>
                <button onClick={actualizarPersona}>Actualizar persona</button>
            </div>
        </div>
    )
}

export default Ejemplo1;