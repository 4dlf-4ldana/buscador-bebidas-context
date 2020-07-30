import React, { Fragment } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario';
import CategoriaProvider from './context/CategoriaContext';
import RecetasProvider from './context/RecetasContext';
import ListaRecetas from './components/ListaRecetas';

function App() {
  return (
    <CategoriaProvider>
      <RecetasProvider>
        <Header />

        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>

          <ListaRecetas />
          
        </div>
      </RecetasProvider>
    </CategoriaProvider>
  );
}

export default App;
