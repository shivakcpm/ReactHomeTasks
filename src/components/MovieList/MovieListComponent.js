import React, { Component } from "react";
import MovieCardComponent from "../MovieCard/MovieCardComponent";
import './MovieListComponent.css';
import { Fragment } from "react";

export default class MovieListComponent extends Component {

  constructor(props){
    super(props);
    this.state = {movies:props.movies};
  }
  static getDerivedStateFromProps(props){
    if(props.movies.length ===0){
      throw new Error('no Movies found');
    }
    return props.movies.length ? {movies:props.movies} : null;
  }
  render() {

    return (
        <Fragment>
    <div className="movies-count"> {this.props.movies.length} movies found</div>
      <div className="movie-list">
       
        {this.props.movies.map((value) => {
          return <MovieCardComponent movie={value} key={value.id} />;
        })}
      </div>
   
      </Fragment>
    );
  }
}
