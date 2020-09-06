import React from 'react';
import TabComponent from '../TabComponent/TabComponent';
import MovieListComponent from '../MovieList/MovieListComponent';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { TABS } from '../../constants';

import './ContentHolder.css';

export default function ContentHolderComponent(props) {
    const onTabChange = (index) => {
        console.log(TABS[index]);
    };

    return (
        <>
            <div className="content-wrapper">
                <div className="nav-head">
                    <TabComponent tabs={TABS} tabChanged={onTabChange} />
                    <div className="sort-container">
                        <span>SORT BY</span>
                        <select>
                            <option value="releaseDate">RELEASE DATE</option>
                            <option value="name">NAME </option>
                        </select>
                    </div>
                </div>
                <ErrorBoundary >
                    <MovieListComponent movies={props.movies} />
                </ErrorBoundary>
            </div>
            <div className="footer-bar">
                <strong>netflix</strong>
                <span>roulette</span>
            </div>
        </>
    );
}
