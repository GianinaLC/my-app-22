import { useState } from "react"
import { getNumber } from "../../services/observableService"

const ObservableExample = () => {
    const [number, setNumber] = useState(0)

    const obtainNewNumbers = () => {
        console.log('Subscription to observable')
        getNumber.subscribe(
            {
                next(newNumber) {
                    console.log('New numbers:', newNumber);
                    setNumber(newNumber);
                },
                error(error) {
                    alert(error)
                    console.log('error in observable')
                },
                complete() {
                    alert(`Finalizado en  ${number}`)
                    console.log('done with the observable')
                }
            }
        )
        

    }
    return (
        <div>
            <h2>Number: {number} </h2>
            <button onClick={obtainNewNumbers} >Obtener nuevos numeros</button>

        </div>
    )
}

export default ObservableExample