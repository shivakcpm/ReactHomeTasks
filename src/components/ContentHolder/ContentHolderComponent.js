import React, { useContext, useState, useCallback, useMemo } from 'react';
import TabComponent from '../TabComponent/TabComponent';
import MovieListComponent from '../MovieList/MovieListComponent';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { TABS } from '../../consts/constants';
import { Context } from '../../contextProvider';
import { DEFAULT_SORT_BY, DEFAULT_FILTER_BY } from '../../consts/constants';
import './ContentHolder.css';

const ContentHolderComponent = props => {
  const { movies } = useContext(Context);
  const [genre, setGenre] = useState(DEFAULT_FILTER_BY);
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
    useSortMovies();
    const moviesByGenre = genre === DEFAULT_FILTER_BY
      ? movies
      : movies.filter(movie => movie.genre === genre);
    return moviesByGenre;
  }, [genre, sortOrder, movies]);

  const handleSort = event => {
    const sortedBy = event.target.value === DEFAULT_SORT_BY
      ? DEFAULT_SORT_BY
      : 'title';
    setSortOrder(sortedBy);
  };

  const useSortMovies = () => {
    useMemo(() => {
      return movies.sort((val1, val2) => {
        return val1[sortOrder].localeCompare(val2[sortOrder]);
      });
    }, [sortOrder]);
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
};

export default ContentHolderComponent;
