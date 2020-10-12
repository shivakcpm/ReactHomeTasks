import React from 'react';
import './DeleteMovie.css';

const DeleteMovieComponent = (props) => {
  return (
    <>
      <p className="delete-movie-header">DELETE MOVIE</p>
      <p className="delete-message">Are you sure you want to delete this movie?</p>
      <div className="delete-button-wrapper">
        <button className="button-submit" onClick={props.onDelete}>
          CONFIRM
        </button>
      </div>
    </>
  );
};

export default DeleteMovieComponent;
