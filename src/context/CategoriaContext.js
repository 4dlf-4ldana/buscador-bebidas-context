import React, { createContext, useState } from 'react';

// Crear el context
export const CategoriaContext = createContext();

// Provider es donde se encuentran las funciones
const CategoriaProvider = (props) => {

    // Crear el state del context
    const [hola, guardarHola] = useState('hola');

    return (
        <CategoriaContext.Provider
            value={{ hola }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )
}

export default CategoriaProvider;