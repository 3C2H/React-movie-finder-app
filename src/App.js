import React from 'react';
import SearchMovies from './components/SearchMovies';
import './style/Style.css';

function App() {
  return (
    <div className="appContainer">
      <h1 className='title'>Movie Search App</h1>
      <SearchMovies />
    </div>
  );
}

export default App;
