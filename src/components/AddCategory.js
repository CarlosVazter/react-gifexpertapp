import React, { useState } from 'react'
// setCategories como un elemento requerido
import PropTypes  from 'prop-types'


export const AddCategory = ( { setCategories } ) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación para que no se mande el formulario vacío.
        if( inputValue.trim().length > 2  ){

            // Trabajando con la prop del componente anterior (setCategories) para pasar el nuevo valor.
            setCategories( categ => [ inputValue, ...categ ] 
                )
            setInputValue('')
        }
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            >
            </input>
        </form>
    )
}

// Validación para solicitar la prop como un elemento de requerido.
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
