import React, { Component } from 'react';
import './DeleteMovie.css';

export default class DeleteMovieComponent extends Component {
  handleDelete = () => {
      this.props.onDelete();
  };

  render() {
      return (
          <>
              <div className="delete-movie-header">DELETE MOVIE</div>
              <div className="delete-message">Are you sure you want to delete this movie?</div>
              <div className="delete-button-wrapper">
                  <button className="button-submit" onClick={this.handleDelete}>
            CONFIRM
                  </button>
              </div>
          </>
      );
  }
}
