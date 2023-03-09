import React from "react";
import { useLocation, useNavigate } from "react-router-dom"
/* USE HISTORY === USENAVIGATE */

const Homepage = () => {
    const location = useLocation();
     //** Este hook nos devuelve el objeto location
    console.log('estas en la ruta:', location.pathname)
    
    const navigate = useNavigate()

    /* const navigateProps = (path) => {
        navigate({
            pathname: path,
            search: '?online=true',//query params
            state: {
                online: true //de este modo me encuentra null online
            }
        })
    } */

//PODEMOS IR HACIA DELANTE SOLO SI HAY UNA RUTA QUE LO PERMITE, que este aniadido
    return (
        <div>
            <h1>Home page</h1>
            <div>
                <button onClick={() => navigate('/profile')}>ir a perfil</button>
                {/* <button onClick={() => navigateProps('/online-state')}>Ir a pagina segun el estado/query params</button> */}
                // * v6
                <button onClick={() => navigate('/online-state', {state:{online: 'true'}})}>Ir a pagina segun el estado/query params</button>
            </div>
        </div>
    )
}

export default Homepage;