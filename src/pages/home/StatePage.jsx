import { useLocation } from "react-router-dom"


const StatePage = () => {
    const location = useLocation();
    console.log('state :', location.state.online) // queryparams
    console.log('query param :', location.search) // queryparams
    
    return (
        <div>
            <h1>State: { location.state ? 'El usuario esta online' : 'el usuario no esta conectado'}</h1>
        </div>
    )
}

export default StatePage