import React, { Component } from 'react';
import MovieCardComponent from '../MovieCard/MovieCardComponent';
import PropTypes from 'prop-types';
import './MovieListComponent.css';

export default class MovieListComponent extends Component {
    render() {
        const { movies } = this.props;
        if (movies.length === 0) {
            throw new Error('no Movies found');
        }

        return (
            <>
                <div className="movies-count">{movies.length} movies found</div>
                <div className="movie-list">
                    {movies.map((value) => {
                        return <MovieCardComponent movie={value} key={value.id} />;
                    })}
                </div>
            </>
        );
    }
}

MovieListComponent.propTypes = {
    movies: PropTypes.array
};
