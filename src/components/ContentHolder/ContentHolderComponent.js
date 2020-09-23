import React, { useContext, useState, useCallback } from 'react';
import TabComponent from '../TabComponent/TabComponent';
import MovieListComponent from '../MovieList/MovieListComponent';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { TABS } from '../../consts/constants';
import { Context } from '../../contextProvider';
import { DEFAULT_SORT_BY } from '../../consts/constants';
import './ContentHolder.css';

export default function ContentHolderComponent(props) {
  const { movies } = useContext(Context);
  const [genre, setGenre] = useState('All');
  const [sortOrder, setSortOrder] = useState(DEFAULT_SORT_BY);

  const editMovie = movie => {
    props.setAllMovies([...props.allMovies.filter(item => item.id !== movie.id), movie]);
  };

  const deleteMovie = movie => {
    props.setAllMovies(props.allMovies.filter(item => item.id !== movie.id));
  };

  const onTabChange = index => {
    setGenre(TABS[index]);
  };

  const genreChange = useCallback(() => {
    const moviesByGenre = genre === 'All'
      ? movies
      : movies.filter(movie => movie.genre === genre);
    sortMovies(sortOrder, moviesByGenre);
    return moviesByGenre;
  }, [genre, sortOrder, movies]);

  const handleSort = event => {
    const sortedBy = event.target.value === DEFAULT_SORT_BY
      ? DEFAULT_SORT_BY
      : 'title';
    setSortOrder(sortedBy);
  };

  const sortMovies = (sortedBy, moviesByGenre) => {
    moviesByGenre.sort((val1, val2) => {
      return val1[sortedBy].localeCompare(val2[sortedBy]);
    });
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="nav-head">
          <TabComponent tabs={TABS} tabChanged={onTabChange} />
          <div className="sort-container">
            <span>SORT BY</span>
            <select onChange={handleSort}>
              <option value="releaseDate">RELEASE DATE</option>
              <option value="name">NAME </option>
            </select>
          </div>
        </div>
        <ErrorBoundary>
          <MovieListComponent
            setMovieDetails={props.setMovieDetails}
            movies={genreChange()}
            editMovie={editMovie}
            deleteMovie={deleteMovie}
          />
        </ErrorBoundary>
      </div>
      <div className="footer-bar">
        <strong>netflix</strong>
        <span>roulette</span>
      </div>
    </>
  );
}
