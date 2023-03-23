import { useState, useEffect } from "react";
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from "../../services/fetchService";

const FetchExample = () => {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const [totalUsers, setTotalUsers] = useState(12)
    const [userPerPage, setUserPerPage] = useState(6)
    const [pages, setPages] = useState(2)

    useEffect(() => {
        obtainUsers();
    }, [])
    
    const obtainUsers = () => {
        getAllUsers()
            //toda la logica debe ir del lado del servicio y no en el componente
            /* .then((response) => {
                if (response.status == 200 && response.ok) {
                    response.json().then((body) => {
                        console.log('all users', body.data);
                        setUsers(body.data);
                    }).catch((err)=> console.log('error', err))
                }
                
            }) */
            .then((response) => {
                console.log('all users', response.data);
                setUsers(response.data);
                setTotalUsers(response.total);
                setUserPerPage(response.per_page);
                setPages(response.total_pages);
            })
            .catch((err) => alert('Hubo un problema al recibir los usuarios', err))
            .finally(() => {
                console.log('Usuarios obtenidos finalizados');
                console.table(users);
            })
    }

    const obtainPageUsers = (page) => {
        getAllPagedUsers(page)
                .then((response) => {
                console.log('all PAGE users', response.data);
                setUsers(response.data);
                setTotalUsers(response.total);
                setUserPerPage(response.per_page);
                setPages(response.total_pages);
            })
            .catch((err) => alert('Hubo un problema con las paginas', err))
            .finally(() => {
                console.log('paginas fin');
                console.table(users);
            })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
                .then((response) => {
                console.log('user', response.data);
                setSelectedUser(response.data);
            })
            .catch((err) => alert('Hubo un problema al recibir el usuario', err))
            .finally(() => {
                console.log('Usuario obtenido finalizados');
                console.table(selectedUser);
            })
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'pistol')
            .then((response) => {
                console.log('TOKEN', response.token);
                sessionStorage.setItem('token', response.token)
            })
            .catch((err) => alert('Hubo un problema en el login', err))
            .finally(() => {
                console.log('Ended login user');
            })
    }
    
    return (
        <div>
            <h2>Users:</h2>
            {/* simular el boton de login */}
            <button onClick={authUser} >Auth user</button>
            <h2>Users:</h2>
            {
                users.map((user, index) => 
                    <p key={index} onClick={()=> obtainUserDetails(user.id)}> {user.first_name} {user.last_name} </p>
                )
            }

            <p>Showing {userPerPage} users of {totalUsers} in total.</p>
            
            <button onClick={() => obtainPageUsers(1)}>1</button>
            <button onClick={() => obtainPageUsers(2)}>2</button>

            <div>
                {selectedUser != null
                    ? 
                        <div>
                            <h3>User details</h3>
                            <p>Name: {selectedUser.first_name}</p>
                            <p>Last name: {selectedUser.last_name}</p>
                            <p>Email: {selectedUser.email}</p>
                            <img alt="Avatar" src={selectedUser.avatar} style={{height:'150px', width:'150px'}} />
                        </div>
                    :
                        <h6>Please click on a User to see its details</h6>
                }
            </div>
        </div>
    )
}

export default FetchExample;