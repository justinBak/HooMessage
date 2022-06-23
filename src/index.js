import React from 'react';
import ReactDOM from 'react-dom';
import MyRoutes from './Components/MyRoutes';
import '../src/resources/css/index.css';

//Renders the component MyRoutes to display in the root html document
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <MyRoutes />
  </React.StrictMode>
);