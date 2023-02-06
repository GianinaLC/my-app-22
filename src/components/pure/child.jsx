import React, { useRef }  from "react";

const Child = ({ name, send , update}) => {
    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton() {
        const text = messageRef.current.value;
    alert(`Text in input ${text}`)
    }

    function pressButtonParams(text) {
        alert(`Text with params: ${text}`)
    }

    function submitName(e) {
        e.preventDefault()
        update(nameRef.current.value)
    }

    return (
        <div style={{background:'cyan', padding:'30px'}}>
            <h3 onMouseOver={() => console.log('on mouse over')}>Hello {name}</h3>
            {/* menos depurable la funcion dentro del boton y no aparte */}
            <button onClick={() => console.log('Boton 1 pulsado')}> Button 1</button>
            <button onClick={pressButton}> Button 2</button>

            {/* no funciona si le pasamos asi los parametros -- se ejecutara al inicio y dara error. */}
            {/* <button onClick={pressButtonParams('Hola')}> Button 3 </button> */}
{/* debemos ponerla en una funcion anonima para que ocurra cuando queramos presionar el boton, cuando ocurra el evento, y no al renderizar la pagina como el anterior */}
            <button onClick={() => pressButtonParams('Hola')}> Button 3 </button>
            <input placeholder="enviale un msj al contenedor padre"
                onFocus={() => console.log('input focus')}
                onChange={(e) => console.log('ocurre un cambio', e.target.value)}
                onCopy={() => console.log('copied text from input')}
                ref={messageRef}
            />
{/* el que controla en verdad el evento es el padre */}
            <button onClick={() => send(messageRef.current.value)}> Mostrar Mensaje</button>
            <div style={{ marginTop: '20px' }}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder="New Name" />
                    <button type="submit">Update name</button>
                </form>

            </div>
        </div>
    )
}

export default Child