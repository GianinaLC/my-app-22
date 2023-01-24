import React, { useState, useEffect, useRef} from "react";

/* ejemplo de 
useState, ()
useRef, (referenciar elementos dentro de la vista )
useEfect (controla los cambios en la vista)ciclo de vida
*/

const Ejemplo2 = () => {
    /* vamos a crear dos contadores distintos, cada uno en un estado diferente */
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)
    /* creamos una referencia para asociar una variable con un elemento del DOM(vista) */
    const miRef = useRef()

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    /* trabajando con useEffect */
/* CASO1: ejecutar siempre un snippet de codigo
cada vez que haya un cambio en el estado del componente se ejecuta aquello que este denro del useEffect */
    /* useEffect(() => {
        console.log('cambio en el estado del componente')
        console.log('mostrando referencia a elemento del dom')
        console.log(miRef)
    }) */
    /*CASO2 ejecutar solo en algunos casos, por ejemplo , solo cuando se cambie el contador 1
cada vez que haya un cambio en contador 1, se ejecuta lo que haya en useEffect, en caso de que cambie contador 2 no habra ejecucion
    */
/* recibe una callback y las dependencias o listado, colocamos los valores que van a sufrir un cambio */
    useEffect(() => {
        console.log('cambio en el estado del contador1')
        console.log('mostrando referencia a elemento del dom')
        console.log(miRef)
    }, [contador1]);

    /* 
    en el caso de que tuvieramos varios estados o solo queremos que estos dos tengan el cambio
    useEffect(() => {
        console.log('cambio en el estado del contador1')
        console.log('mostrando referencia a elemento del dom')
        console.log(miRef)
    }, [contador1,contador2]); 
    */

    /* si declaramos varios useEffect solo el ultimo se ejecutara */
    return (
        <div>
             <h1>Ejemplo de useState, useEfect y useRef ()</h1>
            <h2>Contador1: {contador1} </h2>
            <h2>Contador2: {contador2} </h2>

            {/* elemento referenciado */}
            <h3 ref={miRef}>Dato referenciado</h3>

            {/* bloque de botones para actualizar el estado */}
            <div>
                <button onClick={incrementar1}>Incrementar contador1</button>
                <button onClick={incrementar2}>Incrementar contador2</button>
            </div>
        </div>
    )
}

export default Ejemplo2;