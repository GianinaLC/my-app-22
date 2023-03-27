import axios from 'axios';

//metodo para login successful
/* 
*login method to reqres endpoint
*"email": "eve.holt@reqres.in",
*"password": "cityslicka"
* @param {string} email
* @param {string} password
*/

export const login = (email, password) => {
    let body = {
        email: email,
        password: password
    }
    //return the response with a Promise
    return axios.post('https://reqres.in/api/login', body)
    //url api y la data o body de lo que esta esperando
}

// TODO: obtener todos los usuarios
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}

// TODO: obtener todas las paginas
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

// TODO: obtener usuario by id
export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

// TODO: crear usuario
export const createUser = (name, job) => {
    let body = {
        name,
        job
    }

    return axios.post('https://reqres.in/api/users', body)
}
// TODO: actualizar usuario

//deberia de recibir un id pero esta api no lo usa
export const updateUserByID = (id, name, job) => {
    let body = {
        name,
        job
    }

    return axios.put(`https://reqres.in/api/users/${id}`, body)
}


// TODO: borrar usuario

export const deleteUserByID = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}