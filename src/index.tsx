import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const mainProps = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  dateFilm: '2014'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App name={mainProps.name} genre={mainProps.genre} dateFilm={mainProps.dateFilm} />
  </React.StrictMode>
);
