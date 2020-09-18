import React, { Component } from 'react';
import classnames from 'classnames';
import { GENRE } from '../../constants';
import { MOVIE } from '../../consts/movie';
import './AddMovie.css';

export default class AddMovieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  onValueChange = event => {
    const movie = { ...this.state.movie };
    movie[event.target.name] = event.target.value;
    this.setState({ movie });
  };


  handleBlur = event => {
    const touched = {};
    touched[event.target.name] = true;
    this.setState({ touched });
  };

  getInitialState = () => {
    const movie = { ...MOVIE, id:Math.random() };

    const state = {
      movie: this.props.editMode
        ? { ...this.props.movie }
        : movie,
      touched: {}
    };
    return state;
  };

  handleReset = () => {
    this.setState(this.getInitialState());
  };

  isDataValid() {
    const { title, releaseDate, movieURL, genre, overview, runtime } = this.state.movie;
    const errors = {};
    if (this.isEmpty(title)) {
      errors.title = 'Title is required';
    }
    if (this.isEmpty(movieURL)) {
      errors.movieURL = 'MovieURL is required';
    }
    if (this.isEmpty(overview)) {
      errors.overview = 'Overview is required';
    }
    if (this.isEmpty(genre)) {
      errors.genre = 'Genre is required';
    }
    if (!releaseDate) {
      errors.releaseDate = 'Release Date is required';
    } else if (new Date() < new Date(releaseDate)) {
      errors.releaseDate = 'Release Date should not exceed current date';
    }
    if (!runtime) {
      errors.runtime = 'Runtime  is required';
    }

    return errors;
  }

  isEmpty(value) {
    return !value || !value.trim();
  }

  render() {
    const { editMode, onSubmit } = this.props;
    const { id, title, releaseDate, movieURL, genre, overview, runtime } = this.state.movie;
    const { touched } = this.state;
    const errors = this.isDataValid();
    const disabled = Object.keys(errors).length > 0;

    return (
      <>
        <div className="addmovie-header">
        {editMode
            ? 'Edit Movie'
            : 'Add Movie'
        }</div>
        {editMode && (
          <>
            <label className="input-label">Movie Id</label>
            <div className="movie-id">{id}</div>
          </>
        )}
        <label className="input-label" htmlFor="title">
          Title
        </label>
        <input
          className="input-field"
          onChange={this.onValueChange}
          onBlur={this.handleBlur}
          placeholder="Movie Title here"
          type="text"
          id="title"
          name="title"
          value={title}
        />
        <div className={classnames({ showErrors: touched.title && errors.title })}>{errors.title}</div>
        <label className="input-label" htmlFor="releaseDate">
          Release Date
        </label>
        <input
          className="input-field"
          onChange={this.onValueChange}
          onBlur={this.handleBlur}
          placeholder="Select Date"
          type="date"
          id="releaseDate"
          value={releaseDate}
          name="releaseDate"
        />
        <div
          className={classnames({
            showErrors: touched.releaseDate && errors.releaseDate
          })}
        >
          {errors.releaseDate}
        </div>
        <label className="input-label" htmlFor="movieURL">
          Movie URL
        </label>
        <input
          className="input-field"
          onChange={this.onValueChange}
          onBlur={this.handleBlur}
          placeholder="Movie URL here"
          type="text"
          value={movieURL}
          name="movieURL"
          id="movieURL"
        />
        <div
          className={classnames({
            showErrors: touched.movieURL && errors.movieURL
          })}
        >
          {errors.movieURL}
        </div>
        <label className="input-label" htmlFor="genre">
          Genre
        </label>
        <select
          className="input-field"
          onChange={this.onValueChange}
          type="text"
          onBlur={this.handleBlur}
          value={genre}
          id="genre"
          name="genre"
        >
          <option value="">Select Genre</option>
          {GENRE.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <div className={classnames({ showErrors: touched.genre && errors.genre })}>{errors.genre}</div>
        <label className="input-label" htmlFor="overview">
          Overview
        </label>
        <input
          className="input-field"
          onChange={this.onValueChange}
          type="text"
          onBlur={this.handleBlur}
          value={overview}
          placeholder="Overview here"
          name="overview"
          id="overview"
        />
        <div
          className={classnames({
            showErrors: touched.overview && errors.overview
          })}
        >
          {errors.overview}
        </div>
        <label className="input-label" htmlFor="runtime">
          RunTime
        </label>
        <input
          className="input-field"
          onChange={this.onValueChange}
          type="text"
          value={runtime}
          onBlur={this.handleBlur}
          id="runtime"
          placeholder="Runtime here"
          name="runtime"
        />
        <div
          className={classnames({
            showErrors: touched.runtime && errors.runtime
          })}
        >
          {errors.runtime}
        </div>
        <div className="buttons-wrapper">
          <button className="button-reset" onClick={this.handleReset}>
            RESET
          </button>
          <button
            disabled={disabled}
            className="button-submit"
            onClick={() => {
              onSubmit(this.state.movie);
            }}
          >
            {editMode
                ? 'SAVE'
                : 'SUBMIT'
            }
          </button>
        </div>
      </>
    );
  }
}
