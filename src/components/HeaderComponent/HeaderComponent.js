import React, { createRef, PureComponent } from 'react';
import { DialogComponent } from '../DialogComonent/DialogComponent';
import AddMovieComponent from '../AddMovie/AddMovieComponent';
import './HeaderComponent.css';

export class HeaderComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.searchValue = createRef();
    this.state = { isOpen: false };
  }

  toggleModel = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClick = () => {
    this.props.onSearch(this.searchValue.current.value);
  };

  addMovie = movie => {
    this.toggleModel();
    this.props.addMovie(movie);
  };

  render() {
    return (
      <div className="header-wrapper">
        <div className="image-holder"></div>
        <div className="content-holder">
          <div className="top-bar">
            <div>
              <strong>netflix</strong>
              <span>roulette</span>
            </div>
            <button className="add-movie" onClick={this.toggleModel}>
              {' '}
              + ADD MOVIE
            </button>
          </div>
          {this.state.isOpen && (
            <DialogComponent toggle={this.toggleModel}>
              <AddMovieComponent onSubmit={this.addMovie}></AddMovieComponent>
            </DialogComponent>
          )}
          <div className="find-movie-wrapper">
            <div className="find-movie">Find your Movie</div>
            <input className="search-bar" ref={this.searchValue} placeholder="what do you want to watch?" />
            <button className="search-button" onClick={this.handleClick}>
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}
