import React, { useState, useCallback } from 'react';
import ContentHolderComponent from '../ContentHolder/ContentHolderComponent';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import { Context } from '../../contextProvider';
import MOVIE_LIST from '../../consts/movies.json';

export default function App() {
  const [movies, setMovies] = useState(MOVIE_LIST);
  const [query, setQuery] = useState('');

  const filteredMovies = useCallback(() => {
    return movies.filter(item => new RegExp(query, 'i').test(item.title));
  }, [movies, query]);

  return (
    <React.StrictMode>
      <div className="container">
        <HeaderComponent allMovies={movies} setAllMovies={setMovies} setQuery={setQuery} />
        <Context.Provider value={{ movies:filteredMovies() }}>
          <ContentHolderComponent allMovies={movies} setAllMovies={setMovies} />
        </Context.Provider>
      </div>
    </React.StrictMode>
  );
}
