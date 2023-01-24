import React, { Component , useEffect} from "react";

/* ejemplo de uso del metodo willunmount para componente clase y de hook
Esto es cuando el componente va a desaparacer*/

export class WillUnMount extends Component {
    componentWillUnmount() {
        console.log('comportamiento antes de que el componente desaparezca')
    }




    render() {
        return (
            <div>
                <h1>WillUnMount</h1>

            </div>
        )
        
    }
}

export const WillUnMountHook = () => {
    useEffect(() => {
        //aqui no ponemos nada, va en el return
        return () => {
            console.log('comportamiento antes de que el componente desaparezca')
        }
       
    }, [])
    //el corchete hace que se ejecute solo una vez

    return (
        <div>
            <h1>WillUnMountHook</h1>
        </div>
    )
}