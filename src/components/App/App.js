import React, { useState, useCallback } from 'react';
import ContentHolderComponent from '../ContentHolder/ContentHolderComponent';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import { Context } from '../../contextProvider';
import MOVIELIST from '../../consts/movies.json';

export default function App() {
  const [movies, setMovies] = useState(MOVIELIST);
  const [query, setQuery] = useState('');

  const addMovie = movie => {
    setMovies([...movies, movie]);
  };

  const onSearch = searchTerm => {
    const trimmedQuery = searchTerm.trim();
    setQuery(trimmedQuery);
  };

  const filteredMovies = useCallback(() => {
    return movies.filter(item => new RegExp(query, 'i').test(item.title));
  }, [movies, query]);

  return (
    <React.StrictMode>
      <div className="container">
        <HeaderComponent addMovie={addMovie} onSearch={onSearch} />
        <Context.Provider value={{ movies:filteredMovies() }}>
          <ContentHolderComponent allMovies={movies} setAllMovies={setMovies} />
        </Context.Provider>
      </div>
    </React.StrictMode>
  );
}
