import React, { useContext, useState, useEffect } from 'react';
import TabComponent from '../TabComponent/TabComponent';
import MovieListComponent from '../MovieList/MovieListComponent';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { TABS } from '../../constants';
import { Context } from '../../contextProvider';
import { DEFAULT_SORT_BY } from '../../constants';
import './ContentHolder.css';

export default function ContentHolderComponent(props) {
  const movies = useContext(Context).movies;
  const [sortOrder, setSortOrder] = useState(DEFAULT_SORT_BY);
  let allMovies = props.allMovies;

  const editMovie = movie => {
    const moviesFiltered = allMovies.filter(item => item.id !== movie.id);
    allMovies = [...moviesFiltered, movie];
    props.setAllMovies(allMovies);
  };

  const deleteMovie = movie => {
    allMovies = allMovies.filter(item => item.id !== movie.id);
    props.setAllMovies(allMovies);
  };

  const onTabChange = index => {
    console.log(TABS[index]);
  };

  const handleSort = event => {
    const sortedBy = event.target.value === DEFAULT_SORT_BY
      ? DEFAULT_SORT_BY
      : 'title';
    setSortOrder(sortedBy);
  };

  const sortMovies = sortedBy => {
    movies.sort((val1, val2) => {
      return val1[sortedBy].localeCompare(val2[sortedBy]);
    });
  };

  useEffect(() => {
    return sortMovies(sortOrder);
  }, [sortOrder]);

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
          <MovieListComponent movies={movies} editMovie={editMovie} deleteMovie={deleteMovie}/>
        </ErrorBoundary>
      </div>
      <div className="footer-bar">
        <strong>netflix</strong>
        <span>roulette</span>
      </div>
    </>
  );
}
