import React from 'react'

// Al recibir las props con el operador spred estamos recibiendo por separado cada una de las props.
export const GifGridItem = ( { title, url } ) => {
    
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src = { url } alt = { title }/>
            <p>{ title }</p>
        </div>
    )
}
