import React, { useState } from 'react';
import ContentHolderComponent from '../ContentHolder/ContentHolderComponent';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import { Context } from '../../contextProvider';
import movieList from '../../consts/movies.json';

export default function App() {
  let allMovies = [...movieList];
  const [movies, setMovies] = useState(allMovies);

  const addMovie = movie => {
    allMovies.push(movie);
  };

  const setAllMovies = (newMovies) => {
      allMovies = newMovies;
  };

  const onSearch = searchTerm => {
    const trimmedQuery = searchTerm.trim();
    const filteredMovies = trimmedQuery
      ? allMovies.filter(item => new RegExp(trimmedQuery, 'i').test(item.title))
      : allMovies;
    setMovies(filteredMovies);
  };

  return (
    <React.StrictMode>
      <div className="container">
        <HeaderComponent addMovie={addMovie} onSearch={onSearch} />
        <Context.Provider value={{ movies }}>
          <ContentHolderComponent allMovies={allMovies} setAllMovies= {setAllMovies} />
        </Context.Provider>
      </div>
    </React.StrictMode>
  );
}
