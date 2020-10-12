import React from 'react';
import MovieCardComponent from '../MovieCard/MovieCardComponent';
import PropTypes from 'prop-types';
import './MovieListComponent.css';

const MovieListComponent = (props) => {
  const { movies } = props;
  if (movies.length === 0) {
    throw new Error('no Movies found');
  }

  return (
    <>
      <div className="movies-count">{movies.length} movies found</div>
      <div className="movie-list">
        {movies.map(value =>
           (
            <MovieCardComponent
              setMovieDetails={props.setMovieDetails}
              movie={value}
              key={value.id}
              editMovie={props.editMovie}
              deleteMovie={props.deleteMovie}
            />
          )
        )}
      </div>
    </>
  );
};

MovieListComponent.propTypes = {
  movies: PropTypes.array
};

export default MovieListComponent;
