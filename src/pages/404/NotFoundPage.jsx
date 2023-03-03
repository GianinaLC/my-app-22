import React from "react";
import { useNavigate } from "react-router-dom";

const Notfoundpage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Page not found</h1>
            <button onClick={() => navigate('/')}>Volver al home</button>
        </div>
    )
}

export default Notfoundpage;