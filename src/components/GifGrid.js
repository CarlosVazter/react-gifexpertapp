import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    // Con useEffect hacemos que no haga una petición cada que renderiza el componente, solo cuando detecta un cambio en el componente que hace la petición, es decir, cuando se cambia o se agrega una categoría. 
    // useEffect ( ()=> {
    //     getGifs( category )
    //         .then( imgs => setImages( imgs ));
    // }, [ category ] )

    // Hook personalizado con desestructuración de objetos
    const { data:images , loading } = useFetchGifs( category );
    

    return (
        <>        
            <h3>{ category }</h3>
            
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid animate__animated animate__fadeIn">
                { images.map( image => (
                        <GifGridItem 
                        key = { image.id }
                        // image={ image }
                        // Esta es otra forma de mandar las props.
                        { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
