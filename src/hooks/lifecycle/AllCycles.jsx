import React, {useEffect} from "react";

const Allcycles = () => {
    /* dentro de cada componente debe haber un solo useEffect */
    useEffect(() => {
        
        console.log('componente creado')
        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('actualizacion del componente')
        }, 1000)


        return () => {
            console.log('componente va a desaparecer')
            document.title = 'tiempo detenido'
            clearInterval(intervalID)
        }
       
    }, [])
    //el corchete hace que se ejecute solo una vez

    return (
        <div>
            <h1>WillUnMountHook</h1>
        </div>
    )
}
export default Allcycles;