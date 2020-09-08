import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

export default class MovieCardComponent extends PureComponent {
    render() {
        const {
            movie: { title, year, category, src }
        } = this.props;

        return (
            <div className="movie-card">
                <img src={src} alt={title}></img>
                <div className="menu-icon">&#xFE19;</div>
                <div className="card-footer">
                    <div className="title-info">
                        <div className="title">{title}</div>
                        <div className="year">{year}</div>
                    </div>
                    <div className="category">{category}</div>
                </div>
            </div>
        );
    }
}

MovieCardComponent.propTypes = {
    movie:PropTypes.shape({
        src:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        year:PropTypes.string.isRequired,
        category:PropTypes.string.isRequired,
        id:PropTypes.number.isRequired
    })
};
