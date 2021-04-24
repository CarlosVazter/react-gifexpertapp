import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {

    const [ categories, setCategories ] = useState( ['Dragon Ball'] );
    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Naruto'] )
    //     setCategories( categ => [...categ, 'Naruto'] )
    // };


    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } />  
            
            <hr></hr>

            <ol>
                {
                    // map es como un pequeño ciclo con lo que poblamos la lista.
                    categories.map( category => (
                        <GifGrid key = { category } category={ category } />
                    ))
                }
            </ol>
        </>
    )
}

export default GiftExpertApp