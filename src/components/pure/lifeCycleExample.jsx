/* componente tipo clase que dispone de los metodos de ciclo de vida */

import React from "react";

class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('Willmount: Antes del montaje del componente')
    }

    componentDidMount() {
        console.log('Didmount: justo al acabar el montaje del componente, antes de renderizarlo')
    }

    componentWillReciveProps(nextProps) {
        console.log('WillReciveProps: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
       /*  return true/false . sirve para controlar si el componente debe o no actualizarse*/
        
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: justo antes de actualizarse')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo despues de actualizarse')
    }

    componentWillUnmount(nextProps) {
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }


}