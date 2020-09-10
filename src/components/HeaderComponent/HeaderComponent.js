import React, { createRef, PureComponent } from 'react';
import { DialogComponent } from '../DialogComonent/DialogComponent';
import AddMovieComponent from '../AddMovie/AddMovieComponent';
import { myContext } from '../../contextProvider';
import './HeaderComponent.css';

export class HeaderComponent extends PureComponent {
  static contextType = myContext;

  constructor(props, context) {
      super(props);
      this.context = context;
      this.searchBar = createRef();
      this.state = { open: false };
  }

  toggleModel = () => {
      if (this.state.open) {
          document.body.classList.remove('hide-scroll');
      } else {
          document.body.classList.add('hide-scroll');
      }
      this.setState({ open: !this.state.open });
  };

  handleClick = () => {
      this.context.onSearch(this.searchBar.current.value);
  };

  addMovie = (movie) => {
      this.toggleModel();
      this.context.addMovie(movie);
  };

  render() {
      let addMovieDialog;
      if (this.state.open) {
          addMovieDialog = (
              <DialogComponent open={this.state.open} toggle={this.toggleModel}>
                  <AddMovieComponent onSubmit={this.addMovie}></AddMovieComponent>
              </DialogComponent>
          );
      }
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
                  {addMovieDialog}
                  <div className="find-movie-wrapper">
                      <div className="find-movie">Find your Movie</div>
                      <input
                          className="search-bar"
                          ref={this.searchBar}
                          placeholder="what do you want to watch?"
                      />
                      <button className="search-button" onClick={this.handleClick}>
              Search
                      </button>
                  </div>
              </div>
          </div>
      );
  }
}
