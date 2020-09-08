import React, { Component } from 'react';
import './AddMovie.css';

export default class AddMovieComponent extends Component {
    render() {
        return (
            <>
                <div className="addmovie-header">Add Movie</div>
                <label className="input-label"  for="title">Title</label>
                <input className="input-field" type="text" name="title"/>
                <label className="input-label"  for="releaseDate">Release Date</label>
                <input className="input-field" type="text" name="releaseDate"/>
                <label className="input-label"  for="movie-url">Movie URL</label>
                <input className="input-field" type="text" name="movie-url"/>
                <label className="input-label"  for="genre">Genre</label>
                <input className="input-field" type="text" name="genre"/>
                <label className="input-label"  for="overview">Overview</label>
                <input className="input-field" type="text" name="overview"/>
                <label className="input-label"  for="runtime">RunTime</label>
                <input className="input-field" type="text" name="runtime"/>
            </>
        );
    }
}
