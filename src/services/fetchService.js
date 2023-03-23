export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    console.log('Response:', response);
    console.log('status:', response.status);
    console.log('ok?', response.ok);
    //we return the json
    return response.json();
}


export const getAllPagedUsers = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log('Response:', response);
    console.log('status:', response.status);
    console.log('ok?', response.ok);
    //we return the json
    return response.json();
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    console.log('Response:', response);
    console.log('status:', response.status);
    console.log('ok?', response.ok);
    //we return the json
    return response.json();
}

//login -post
export const login = async (email, password) => {
    let body = {
        //email:email
        email,
        password
    }
    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        credentials: 'omit',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-type': 'application/json'
        },
        body
    })
    console.log('Response:', response);
    console.log('status:', response.status);
    console.log('ok?', response.ok);
    return response.json();

}