import React, { useContext, useState, useCallback, useMemo } from 'react';
import TabComponent from '../TabComponent/TabComponent';
import MovieListComponent from '../MovieList/MovieListComponent';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { TABS } from '../../consts/constants';
import { Context } from '../../contextProvider';
import { DEFAULT_SORT_BY, DEFAULT_FILTER_BY } from '../../consts/constants';
import './ContentHolder.css';

const ContentHolderComponent = (props) => {
  const { movies } = useContext(Context);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [sortedBy, setSortedBy] = useState(DEFAULT_SORT_BY);

  const editMovie = movie => {
    props.setAllMovies([...props.allMovies.filter(item => item.id !== movie.id), movie]);
  };

  const deleteMovie = movie => {
    props.setAllMovies(props.allMovies.filter(item => item.id !== movie.id));
  };

  const onTabChange = index => {
    const genre = TABS[index];
    setFilteredMovies(genre === DEFAULT_FILTER_BY
      ? movies
      : movies.filter(movie => movie.genre === genre));
  };

  const handleSort = event => {
    const sortOrder = event.target.value === DEFAULT_SORT_BY
      ? DEFAULT_SORT_BY
      : 'title';
    setSortedBy(sortOrder);
  };

  const sortMovies = useCallback(
    () =>
      filteredMovies.sort((val1, val2) => {
        return val1[sortedBy].localeCompare(val2[sortedBy]);
      }),
    [sortedBy]
  );

  const moviesToDisplay = useMemo(() => {
    sortMovies();
    return filteredMovies;
  }, [sortedBy, filteredMovies]);

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
            movies={moviesToDisplay}
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
};

export default ContentHolderComponent;
