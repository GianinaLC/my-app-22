import React, { Component , useEffect} from "react";

/* ejemplo de uso de ciclo de vida del metodo de ciclo de vida en componente clase y el hook de ciclo de vida en componente funcional */

export class Didmount extends Component {
    componentDidMount() {
        console.log('comportamiento antes de que el componente sea aniadido al dom (renderice)')
    }




    render() {
        return (
            <div>
                <h1>Didmount</h1>

            </div>
        )
        
    }
}

export const DidmountHook = () => {
    useEffect(() => {
        console.log('comportamiento antes de que el componente sea aniadido al dom (renderice)')
    }, [])
    //el corchete hace que se ejecute solo una vez

    return (
        <div>
            <h1>DidmountHook</h1>
        </div>
    )
}