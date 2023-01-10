import React from 'react'
import Style from './vista.module.css'

export const Ventana = ({tipo="editor", id, titulo="titulo", cuerpo = 'placeHolder' } ) => {
    return (
        <div id={id} className={`${Style.ventana} ${Style[tipo]}` }>
            <div className={Style.tituloVentana}> {titulo}</div>
            <div className={Style.cuerpoVentana}> 
            {cuerpo}
            </div>
        </div>
    )
}
