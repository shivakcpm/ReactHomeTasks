import React, { PureComponent } from 'react';
import './MovieCard.css';
export default class MovieCardComponent extends PureComponent {
    render() {
        const {
            movie: { title, year, category }
        } = this.props;
        return (
            <div className="movie-card">
                <img src= {this.props.movie.src} alt={title}></img>
                <div className="menu-icon">&#xFE19;</div>
                <div className="card-footer">
                    <div className="title-info">
                        <div className="title">{title}</div>
                        <div className="year"> {year}</div>
                    </div>
                    <div className="category"> {category}</div>
                </div>
            </div>
        );
    }
}
