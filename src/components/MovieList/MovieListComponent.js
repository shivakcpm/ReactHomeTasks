import React from 'react';
import MovieCardComponent from '../MovieCard/MovieCardComponent';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {store, deleteMovieAsync, editMovieAsync} from '../../store/store';
import './MovieListComponent.css';

const MovieListComponent = (props) => {
  const { movies } = props;

  const editMovie = movie => {
    store.dispatch(editMovieAsync(movie)).then(() => {
      props.fetchMovies();
    });
  };

  const deleteMovie =  movie => {
    store.dispatch(deleteMovieAsync(movie)).then(() => {
      props.fetchMovies();
    });
  };

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
              editMovie={editMovie}
              deleteMovie={deleteMovie}
            />
          )
        )}
      </div>
    </>
  );
};

MovieListComponent.propTypes = {
  movies: PropTypes.array,
  fetchMovies:PropTypes.func
};

const mapDispatchToProps = (state) => {
  return {
      movies: state.moviesData.data || []
  };
};

export default connect(mapDispatchToProps)(MovieListComponent);
