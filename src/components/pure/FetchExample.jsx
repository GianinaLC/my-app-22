import { useEffect, useState } from "react";
import { getAllPagedUsers, getAllUsers, getUserDetails } from "../../services/fetchService";

const FetchExample = () => {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState({})
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
            .catch((err) => alert('Hubo un problema al recibir los usuarios', err))
            .finally(() => {
                console.log('Usuarios obtenidos finalizados');
                console.table(users);
            })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
                .then((response) => {
                console.log('user', response.data);
                setSelectedUser(response.data);
            })
            .catch((err) => alert('Hubo un problema al recibir los usuarios', err))
            .finally(() => {
                console.log('Usuario obtenido finalizados');
                console.table(selectedUser);
            })
    }

    return (
        <div>
            <h2>Users:</h2>
            {
                users.map((user, index) => {
                    <p key={index} onClick={()=> obtainUserDetails(user.id)}> {user.first_name} {user.last_name} </p>
                })
            }
            <p>Showing {userPerPage} users of { totalUsers} in total.</p>
            <button onClick={() => obtainPageUsers(1)}>1</button>
            <button onClick={() => obtainPageUsers(2)}>2</button>
            <div>
                <h3>User details</h3>
                    {
                        selectedUser && (
                            <div>
                                <p>Name: {selectedUser.first_name}</p>)
                            <p>Last name: {selectedUser.last_name}</p>
                            <p>Email: {selectedUser.email}</p>
                            <img alt="Avatar" src={selectedUser.avatar} style={{height:'50px', width:'50px'}} />
                            </div>)
                    }
            </div>
        </div>
    )
}

export default FetchExample;