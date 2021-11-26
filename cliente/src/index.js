//Importo los componentes que tengo separados
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(
  <React.StrictMode>
    {/*Traigo los componentes importados como etiquetas HTML con cierre*/}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


