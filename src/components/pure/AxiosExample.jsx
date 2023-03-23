import { useEffect, useState } from "react";
import { getRandomUser } from "../../services/axiosService";

const AxiosExample = () => {
    const [user, setUser] = useState(null)
    /* useEffect(() => {
        obtainUser()
    },[])
 */
    const obtainUser = () => {
        getRandomUser()
            .then((response) => {
                if (response.status === 200) {
                    setUser(response.data.results[0])
                    
                console.log(response)
                }
            })
            .catch((err) => alert('Algo salio mal',err))
    }
    return (
        <div>
            <h1>Axios user</h1>
            {
                user != null ?
                    (<div>
                        <img alt="avatar" src={user.picture.large} />
                        <h2>User: {user.name.title} {user.name.first} {user.name.last} </h2>
                        <h3>{user.email}</h3>
                    </div>)
                    :
                    (<div>
                        <p>Generate a new user</p>
                        
                    </div>)
            }
            <button onClick={obtainUser} >Random user</button>
        </div>
    )
}

export default AxiosExample;