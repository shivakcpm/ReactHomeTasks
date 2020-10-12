import React, { useState, useCallback } from 'react';
import ContentHolderComponent from '../ContentHolder/ContentHolderComponent';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import MovieDetails from '../MovieDetails/MovieDetailsComponent';
import { Context } from '../../contextProvider';
import MOVIE_LIST from '../../consts/movies.json';

const App =  () => {
  const [movies, setMovies] = useState(MOVIE_LIST);
  const [query, setQuery] = useState('');
  const [movieDetails, setMovieDetails] = useState(null);

  const filteredMovies = useCallback(() => {
    return movies.filter(item => new RegExp(query, 'i').test(item.title));
  }, [movies, query]);

  const componentToDisplay = movieDetails
    ? <MovieDetails {...movieDetails} goToHome={setMovieDetails}/>
    : <HeaderComponent allMovies={movies} setAllMovies={setMovies} setQuery={setQuery} />;

  return (
    <React.StrictMode>
      <div className="container">
      {componentToDisplay}
        <Context.Provider value={{movies:filteredMovies()}}>
          <ContentHolderComponent setMovieDetails={setMovieDetails} allMovies={movies} setAllMovies={setMovies} />
        </Context.Provider>
      </div>
    </React.StrictMode>
  );
};

export default App;
