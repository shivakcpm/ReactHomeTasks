import React, { Component } from "react";
import ContentHolderComponent from "../ContentHolder/ContentHolderComponent";
import { TopComponent } from "../TopComponent/TopComponent";
import "./App.css";
import movies from "../../Movies.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movies };
  }
  onSearch = (query) => {
    let filteredMovies = movies.filter((item) =>
      new RegExp(query, "i").test(item.title)
    );
    this.setState({ movies: filteredMovies });
  };
  render() {
    return (
      <React.StrictMode>
        <div className="container">
          <TopComponent onSearch={this.onSearch} />
          <ContentHolderComponent movies={this.state.movies} />
        </div>
      </React.StrictMode>
    );
  }
}
