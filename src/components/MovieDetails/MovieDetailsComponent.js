import React from 'react';
import './MovieDetails.css';

export default function MovieDetails(props) {
    return (

        <div className="header-wrapper">
            <div className="image-holder"></div>
            <div className="content-holder">
                <div className="top-bar">
                    <div>
                        <strong>netflix</strong>
                        <span>roulette</span>
                    </div>
                    <img src="/public/searchIcon.PNG" onClick={props.goToHome.bind(this, null)}/>
                </div>
                <div className="movie-details-parent">
                    <img className="details-image" src={props.src}/>
                    <div className="details-wrapper">
                        <span className="movie-title">{props.title}</span>
                        <span className="rating">4.4</span>
                        <div className="category">{props.category}</div>
                        <span className="release-date color-red">{new Date(props.releaseDate).getFullYear()}</span>
                        <span className="color-red">{props.runtime} min</span>
                        <p>{props.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
