import React, { createRef, PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import DialogComponent  from '../DialogComonent/DialogComponent';
import AddMovieComponent from '../AddMovie/AddMovieComponent';
import { store, addMovieAsync } from '../../store/store';
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

  addMovie = movie => {
    this.toggleModel();
    store.dispatch(addMovieAsync(movie));
    this.props.fetchMovies();
  };

  onSearch = () => {
    const trimmedQuery = this.searchValue.current.value.trim();
    const {history} = this.props;
    history.push(`/search/${trimmedQuery}`);
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
          <div className="find-movie-wrapper">
            <div className="find-movie">Find your Movie</div>
            <input className="search-bar" ref={this.searchValue} placeholder="what do you want to watch?" />
            <button className="search-button" onClick={this.onSearch}>
              Search
            </button>
          </div>
        </div>
        {this.state.isOpen && (
          <DialogComponent toggle={this.toggleModel}>
            <AddMovieComponent onSubmit={this.addMovie}></AddMovieComponent>
          </DialogComponent>
        )}
      </div>
    );
  }
}

export default withRouter(HeaderComponent);
