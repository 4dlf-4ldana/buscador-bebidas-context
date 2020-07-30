import React, { Fragment } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario';
import CategoriaProvider from './context/CategoriaContext';

function App() {
  return (
    <CategoriaProvider>
      <Header />

      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategoriaProvider>
  );
}

export default App;
