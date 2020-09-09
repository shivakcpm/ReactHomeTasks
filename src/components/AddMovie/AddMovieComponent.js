import React, { Component } from 'react';
import classnames from 'classnames';
import './AddMovie.css';

export default class AddMovieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

  onValueChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      const movie = this.state.movie;
      movie[name] = value;
      this.setState({ movie });
  };

  handleSubmit = () => {
      if (this.isDataValid()) {
          this.props.onSubmit(this.state.movie);
          this.setState(this.getInitialState());
      } else {
          this.setState({ showErrors:true });
      }
  }

  getInitialState = () => {
      const movie = {
          title: '',
          releaseDate: '',
          movieURL: '',
          genre: '',
          overview: '',
          runtime: '',
          src:'/public/avengers.PNG',
          category:'Action & Adventure'
      };

      const state =  {
          movie: this.props.editMode
              ? { ...this.props.movie }
              : movie,
          showErrors:false
      };
      return state;
  }

  handleReset = () => {
      this.setState(this.getInitialState());
  }

  isDataValid() {
      const { title, releaseDate, movieURL, genre, overview, runtime } = this.state.movie;
      return title.trim() && movieURL.trim() && overview.trim() && releaseDate && runtime && genre;
  }

  render() {
      const options = ['Horror', 'Comedy', 'Crime', 'Documentory'];
      const { editMode } = this.props;
      const { id, title, releaseDate, movieURL, genre, overview, runtime } = this.state.movie;
      return (
          <>
              <div className="addmovie-header">{ editMode
                  ? 'Edit Movie'
                  : 'Add Movie'}</div>
              <label  className={classnames('input-label', { visible: editMode, hidden:!editMode })} >
          Movie Id
              </label>
              <div className="movie-id">{id}</div>
              <label className="input-label" htmlFor="title">
          Title
              </label>
              <input
                  className="input-field"
                  onChange={this.onValueChange}
                  placeholder="Movie Title here"
                  type="text"
                  name="title"
                  value={title}
              />
              <div className={classnames({ showErrors: this.state.showErrors && !title.trim() })}>Title is mandatory</div>
              <label className="input-label" htmlFor="releaseDate">
          Release Date
              </label>
              <input
                  className="input-field"
                  onChange={this.onValueChange}
                  placeholder="Select Date"
                  type="date"
                  value={releaseDate}
                  name="releaseDate"
              />
              <div className={classnames({ showErrors: this.state.showErrors && !releaseDate })}>Release date is mandatory</div>
              <label className="input-label" htmlFor="movieURL">
          Movie URL
              </label>
              <input
                  className="input-field"
                  onChange={this.onValueChange}
                  placeholder="Movie URL here"
                  type="text"
                  value={movieURL}
                  name="movieURL"
              />
              <div className={classnames({ showErrors: this.state.showErrors && !movieURL.trim() })}>Movie URL is mandatory</div>
              <label className="input-label" htmlFor="genre">
          Genre
              </label>
              <select
                  className="input-field"
                  onChange={this.onValueChange}
                  type="text"
                  value={genre}
                  name="genre"
              >
                  <option value="">Select Genre</option>
                  {options.map((item, index) => {
                      return (
                          <option key={index} value={item}>
                              {item}
                          </option>
                      );
                  })}
              </select>
              <div className={classnames({ showErrors: this.state.showErrors && !genre })}>Genre is mandatory</div>
              <label className="input-label" htmlFor="overview">
          Overview
              </label>
              <input
                  className="input-field"
                  onChange={this.onValueChange}
                  type="text"
                  value={overview}
                  placeholder="Overview here"
                  name="overview"
              />
              <div className={classnames({ showErrors: this.state.showErrors && !overview.trim()  })}>Overview is mandatory</div>
              <label className="input-label" htmlFor="runtime">
          RunTime
              </label>
              <input
                  className="input-field"
                  onChange={this.onValueChange}
                  type="text"
                  value={runtime}
                  placeholder="Runtime here"
                  name="runtime"
              />
              <div className={classnames({ showErrors: this.state.showErrors && !runtime.trim() })}>Runtime is mandatory</div>
              <div className="buttons-wrapper">
                  <button className="button-reset" onClick={this.handleReset}>RESET</button>
                  <button
                      className="button-submit"
                      onClick={this.handleSubmit}
                  >
                      {editMode
                          ? 'SAVE'
                          : 'SUBMIT'}
                  </button>
              </div>
          </>
      );
  }
}
