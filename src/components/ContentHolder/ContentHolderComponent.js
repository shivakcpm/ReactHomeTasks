import React, { useContext, useState } from 'react';
import TabComponent from '../TabComponent/TabComponent';
import MovieListComponent from '../MovieList/MovieListComponent';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { TABS } from '../../constants';
import { myContext } from '../../contextProvider';
import './ContentHolder.css';

export default function ContentHolderComponent(props) {
    const onTabChange = (index) => {
        console.log(TABS[index]);
    };
    const movies = useContext(myContext).movies;
    const [sortOrder, setSortOrder] =  useState('releaseDate');

    const handleSort = (event) => {
        const key = event.target.value === 'releaseDate'
            ? 'releaseDate'
            : 'title';
        setSortOrder(key);
        sortMovies(key);
    };

    const sortMovies = (key) => {
        movies.sort((val1, val2) => {
            return val1[key] > val2[key]
                ? 1
                : -1;
        });
    };

    sortMovies(sortOrder);

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
                <ErrorBoundary key={movies.length}>
                    <MovieListComponent  movies={movies} />
                </ErrorBoundary>
            </div>
            <div className="footer-bar">
                <strong>netflix</strong>
                <span>roulette</span>
            </div>
        </>
    );
}

