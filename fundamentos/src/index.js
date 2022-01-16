import React from 'react'
import  ReactDOM from 'react-dom'

// creamos un componente
const TarjetaFruta = () => (
<div>
      <h3>Titulo</h3>
      <hr/>
      <p>Descripcion ........</p>
  </div>
)
  

const App = () => (
    <div>
        <TarjetaFruta/>
        <TarjetaFruta></TarjetaFruta>
    </div>
)

const root = document.getElementById('root')
ReactDOM.render(<App />, root)