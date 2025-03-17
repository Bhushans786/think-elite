import React from 'react';
import './App.scss';
import { useRoutes } from 'react-router-dom';
import routes from './route';

function App() {
  const content = useRoutes(routes);
  return content;
}

export default App;
