import React, { useState } from "react";
/* MANEJANDO RENDERIZADOS */
///login logout buttons, como componentes - es mucho mas controlable

 /* estilo para usuario logueado */
    const loggedStyle = {
        backgroundColor: 'green',
        fontWeight: 'bold',
        color: 'white'
    };
    /* estilo para usuario no logueado */
    const unloggedStyle = {
        backgroundColor: 'tomato',
        color: 'white',
        fontWeight: 'bold'
}
        

const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={ logoutAction }>Logout</button>
    )
}
//? (expresion true) && elemento => se renderiza la expresion
//? (expresion false) && elemento => no se renderiza la expresion


const Optionalrender = () => {
    const [access, setAccess] = useState(false)
    const [nMessages, setNMessages] = useState(0)
    /* const updateAccess = () => {
        //actualiza de true a false y viceversa
        setAccess(!access)
    } */

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

   
    
    //elemento
    /* let opcionalButton;
    if (access) {
        opcionalButton = <button onClick={updateAccess}>Logout</button>
    } else {
        opcionalButton = <button onClick={updateAccess}>Login</button>
    } */
    //componentes que devuelven elementos
    let opcionalButton;
    if (access) {
        opcionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction} />
    } else {
        opcionalButton = <LoginButton propStyle={ loggedStyle} loginAction={loginAction} />
    }

    //mensaje no leido
    let addMessages = () => {
        setNMessages( nMessages +1 )
    }



    return (
        <div>
            {/* boton opcional */}
            {opcionalButton}
            {/* nMessages sin leer */}
            {/* {nMessages > 0 && nMessages === 1 &&  <p>Tienes {nMessages} mensaje nuevo...</p>}
            {nMessages > 1 && <p>Tienes {nMessages} mensajes nuevos...</p>}
            {nMessages === 0 && <p>No tienes mensajes</p>} */}
           
            {/*  //?OPERADOR TERNARIO */}
           {/*  {
                nMessages > 0 ? <p>You have {nMessages} new message{nMessages > 1? 's' : null}...</p> : <p>There are no new messages</p>
            } */}

            {/* <button onClick={addMessages}>Add new Message</button> */}
            {/* <button onClick={addMessages}>
                {nMessages === 0 ? 'Add your first message' : 'Add new message'}
            </button> */}

            {access
                ? (<div>
                        {
                            nMessages > 0
                                ? <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}...</p>
                                : <p>There are no new messages</p>
                    }
                    <button onClick={addMessages}>
                {nMessages === 0 ? 'Add your first message' : 'Add new message'}
            </button>
                    </div>)
                : null}
        </div>
    )
}

export default Optionalrender