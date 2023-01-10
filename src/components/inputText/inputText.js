import React from "react";
import Styles from './inputText.module.css'

export const InputText = ({estado = {texto: "no se que poner"}, numberRows = 15, id}) => {
    const changeHandler = (event) => {
        event.preventDefault()
        estado.setTexto(() => {
            return event.target.value
        })
    }

    return ( 
        <div className={Styles.form}>
            {/* <h1>hola input</h1>
            <h2>{estado.texto}</h2> */}
            {/* <form onSubmit={e => { e.preventDefault()}} > */}
                <textarea id={id} rows={numberRows} className={Styles.area} type="textArea" value={estado.texto} onChange={changeHandler} ></textarea>
            {/* </form> */}
        </div>
    )
}