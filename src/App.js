import React from 'react';
import './App.css';
import './components/SearchMovies'
import SearchMovies from './components/SearchMovies';

function App() {
  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchMovies />

    </div>
  );
}

export default App;
