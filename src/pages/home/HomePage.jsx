import React from "react";
import { useLocation, useNavigate } from "react-router-dom"
/* USE HISTORY === USENAVIGATE */

const Homepage = () => {
    const location = useLocation();
     //** Este hook nos devuelve el objeto location
    console.log('estas en la ruta:', location.pathname)
    
    const navigate = useNavigate()

//PODEMOS IR HACIA DELANTE SOLO SI HAY UNA RUTA QUE LO PERMITE, que este aniadido
    return (
        <div>
            <h1>Home page</h1>
            <div>
                <button onClick={() => navigate('/profile')}>ir a perfil</button>
            </div>
        </div>
    )
}

export default Homepage;