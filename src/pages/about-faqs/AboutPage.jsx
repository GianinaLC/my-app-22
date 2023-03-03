import { useLocation, useNavigate } from "react-router-dom"
/* USE HISTORY === USENAVIGATE */

const AboutPage = () => {
    const location = useLocation();
    console.log('esta en ruta : ', location.pathname);//devuelve la ruta about

        /* const history = useNavigate();

        const navigate = (path) => {
         history.push(path); 
        } */
    
    //***v6
    const navigate = useNavigate()
//*** v6 navigate(-1) o (-x) cantidad de veces de ir hacia atras
    
/*     const goBack = () => {
        history.goBack();
    */

    /* const goForward = () => {
        history.goBack();
    } */
    //*** navigate(1) forward

    return (
        <div>
            <h1>About Page | FAQS</h1>
            <div>
                <button onClick={() => navigate('/')}>ir a home</button>
                <button onClick={() => navigate(-1)}>Atras</button>
                <button onClick={() => navigate(1)}>Forward</button>
            </div>
        </div>
    )
}

export default AboutPage