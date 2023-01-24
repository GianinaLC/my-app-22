import React, { Component , useEffect} from "react";

/* ejemplo de uso de metodo didupdate en componente clase y uso de hook en componente funcional */

export class DidUpdate extends Component {
    componentDidUpdate() {
        console.log('comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
        
    }
}

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    })
    //sin corchetes se ejecutaria cada vez que haya un cambio en el estado o cambio de props

    return (
        <div>
            <h1>DidUpdateHook</h1>
        </div>
    )
}