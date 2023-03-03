import React from "react";
import { useNavigate } from "react-router-dom"
/* USE HISTORY === USENAVIGATE */

const ProfilePage = ({ user }) => {
    const navigate = useNavigate()
//*** v6 navigate(-1) o (-x) cantidad de veces de ir hacia atras

 //*** navigate(1) forward
//PODEMOS IR HACIA DELANTE SOLO SI HAY UNA RUTA QUE LO PERMITE, que este aniadido
    return (
        <div>
            <h1>Tu Perfil</h1>
            <button onClick={()=> navigate('/tasks')}>Tareas</button>
            <button onClick={()=> navigate(-1)}>Volver atras</button>
        </div>
    )
}

export default ProfilePage;