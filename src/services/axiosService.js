import APIRequest from "../utils/config/axios.config";

export function getRandomUser() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500; // Resuelve solo si el código de estado es menor que 500
        }
    })
    //devuelve la respuesta de https://randomuser.me/api/
    //APIRequest.post('/login/',body)
}

