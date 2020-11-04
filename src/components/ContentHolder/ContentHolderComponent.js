import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TabComponent from '../TabComponent/TabComponent';
import MovieListComponent from '../MovieList/MovieListComponent';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import  HeaderComponent  from '../HeaderComponent/HeaderComponent';
import MovieDetails from '../MovieDetails/MovieDetailsComponent';
import { TABS, DEFAULT_SORT_BY, DEFAULT_FILTER_BY } from '../../consts/constants';
import { store, getMoviesAsync } from '../../store/store';
import './ContentHolder.css';

const ContentHolderComponent = () => {
  const [genre, setGenre] = useState(DEFAULT_FILTER_BY);
  const [sortBy, setSortBy] = useState(DEFAULT_SORT_BY);
  const { id, query } = useParams();

  const onTabChange = index => {
    setGenre(TABS[index]);
  };

  const fetchMovies = () => {
    const filterBy = genre !== DEFAULT_FILTER_BY
      ? genre
      : null;
    store.dispatch(
      getMoviesAsync({
        search: query,
        searchBy: 'title',
        sortOrder: 'desc',
        sortBy,
        filter: filterBy
      })
    );
  };

  const handleSort = event => {
    const sortedBy = event.target.value === DEFAULT_SORT_BY
      ? DEFAULT_SORT_BY
      : 'title';
    setSortBy(sortedBy);
  };

  useEffect(() => {
     fetchMovies();
  }, [genre, sortBy, query]);

  const componentToDisplay = id
    ? <MovieDetails id={id}/>
    : <HeaderComponent  fetchMovies={fetchMovies} />;

  return (
    <>
      {componentToDisplay}
      <div className="content-wrapper">
        <div className="nav-head">
          <TabComponent tabs={TABS} tabChanged={onTabChange} />
          <div className="sort-container">
            <span>SORT BY</span>
            <select onChange={handleSort}>
              <option value="release_date">RELEASE DATE</option>
              <option value="name">NAME </option>
            </select>
          </div>
        </div>
        <ErrorBoundary>
          <MovieListComponent fetchMovies={fetchMovies}  />
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
