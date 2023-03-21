const AsyncExample = () => {

    async function generateNumber() {
        return 1;
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    function obtainNumber() {
        generateNumber().then((response => alert(`Response ${response}`)))
            .catch((error) => alert(`Algo salio mal: ${error}`))
    }

    function obtainPromiseNumber() {
        generatePromiseNumber().then((response => alert(`Response ${response}`)))
            .catch((error) => alert(`Algo salio mal: ${error}`))
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key))
    }
        
    function showStorage() {
        saveSessionStorage('name', 'Gianina')
            .then((response) => {
                let value = response;
                alert(`Nombre guardado: ${value}`)
            })
            .catch(err => alert(`Algo salio mal: ${err}`))
            .finally(()=> console.log('SUCCESS: Name saved and retreived'))
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(()=> resolve('Hola mundo'),2000)
        })
        let message = await promise;
        await alert(`Mensaje recibido: ${message}`)
    }


    const returnError = async () => {
        await Promise.reject(new Error('Oooops!Error'))
    }

    const consumeError = () => {
        returnError()
            .then((response)=> alert('Todo ok', response))
            .catch(err => alert(`Algo salio mal: ${err}`))
            .finally(()=> alert('Finally executed'))
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL')
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Algo anda mal con la URL ${error}`)
            
            
        }
    }

    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch(error =>  alert(`Algo anda mal con la URL ${error}`))
    }

    
    return (
        <div>
            <h1>Ejemplos Async</h1>
            <button onClick={obtainNumber} >Obtener numero</button>
            <button onClick={obtainPromiseNumber} >Obtener numero</button>
            <button onClick={showStorage} >Guardar nombre y mostrar</button>
            <button onClick={obtainMessage} >Recibir msj 2 segundos</button>
            <button onClick={consumeError} >Obtener Error</button>
            <button onClick={urlNotFound} >Obtener URL notfound</button>
            <button onClick={multiplePromise} >Multiple Promise</button>
        </div>
    )
}


export default AsyncExample;