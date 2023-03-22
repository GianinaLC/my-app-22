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
    let response = await fetch(`https://reqres.in/api/users?page=${id}`);
    console.log('Response:', response);
    console.log('status:', response.status);
    console.log('ok?', response.ok);
    //we return the json
    return response.json();
}