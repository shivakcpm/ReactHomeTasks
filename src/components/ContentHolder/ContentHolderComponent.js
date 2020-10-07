import React, {  useState, useCallback } from 'react';
import TabComponent from '../TabComponent/TabComponent';
import MovieListComponent from '../MovieList/MovieListComponent';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import MovieDetails from '../MovieDetails/MovieDetailsComponent';
import { TABS, DEFAULT_SORT_BY, DEFAULT_FILTER_BY } from '../../consts/constants';
import { store, getMoviesActionAsync } from '../../store/store';
import { connect } from 'react-redux';
import './ContentHolder.css';

const ContentHolderComponent = props => {
  const [genre, setGenre] = useState(DEFAULT_FILTER_BY);
  const [sortBy, setSortBy] = useState(DEFAULT_SORT_BY);
  const [movieDetails, setMovieDetails] = useState(null);
  const [query, setQuery] = useState('');

  const onTabChange = index => {
    setGenre(TABS[index]);
  };

  const fetchMovies = () => {
    const filterBy = genre !== DEFAULT_FILTER_BY
      ? [genre]
      : null;
    store.dispatch(getMoviesActionAsync({search:query, searchBy:'title', sortOrder:'desc', sortBy,
      filter:filterBy}));
  };

  const genreChange = useCallback(() => {
   fetchMovies();
  }, [genre, sortBy, query]);

  const handleSort = event => {
    const sortedBy = event.target.value === DEFAULT_SORT_BY
      ? DEFAULT_SORT_BY
      : 'title';
      setSortBy(sortedBy);
  };
genreChange();


const componentToDisplay = movieDetails
  ? <MovieDetails {...movieDetails} goToHome={setMovieDetails}/>
  : <HeaderComponent setQuery={setQuery} fetchMovies={fetchMovies} />;

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
          <MovieListComponent
            fetchMovies = {fetchMovies}
            setMovieDetails={setMovieDetails}
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


const mapDispatchToProps = (state) => {
  return {
    deleteMovie: state.deleteMovie || false
  };
};

export default connect(mapDispatchToProps)(ContentHolderComponent);

