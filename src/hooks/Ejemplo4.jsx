import React from "react";
/* ejemplo para entender el uso de props.children //elementos html*/

const Ejemplo4 = (props) => {
    /* la idea es que este componente pueda pintar aquelloos elementos que se pasen desde el padre */

    return (
        <div>
            <h1> ejemplo de children props </h1>
            <h2>nombre: {props.nombre} </h2>
            {/* props.children pintara por defecto aquello que se encuentre entre las etiquetas de apertura y cierre de este componente desde el componentes de orden superior*/}
            {props.children}
        </div>
    )
}

export default Ejemplo4;