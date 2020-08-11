import React, { Component } from "react";
import MovieCardComponent from "../MovieCard/MovieCardComponent";
import './MovieListComponent.css';
import { Fragment } from "react";

export default class MovieListComponent extends Component {
  render() {

    return (
        <Fragment>
    <div className="movies-count"> {this.props.movies.length} movies found</div>
      <div className="movie-list">
       
        {this.props.movies.map((value) => {
          return <MovieCardComponent movie={value}/>;
        })}
      </div>
   
      </Fragment>
    );
  }
}
