import React, { Component } from "react";
import TabComponent from "../TabComponent/TabComponent";
import MovieListComponent from "../MovieList/MovieListComponent";
import "./ContentHolder.css";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import {TABS} from '../../constants';

export default class ContentHolderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  //  this.tabs = ["All", "Documentory", "Comedy", "Horror", "Crime"];
  }
  onTabChange = (index) => {
    console.log(TABS[index]);
  };
  render() {
    return (
      <>
        <div className="content-wrapper">
          <div className="nav-head">
            <TabComponent tabs={TABS} tabChanged={this.onTabChange} />
            <div className="sort-container">
              <span>SORT BY</span>
              <select>
                <option value="releaseDate">RELEASE DATE</option>
                <option value="name">NAME </option>
              </select>
            </div>
          </div>
          <ErrorBoundary key={this.props.movies.length}>
            <MovieListComponent movies={this.props.movies} />
          </ErrorBoundary>
        </div>
        <div className="footer-bar">
          <strong>netflix</strong>
          <span>roulette</span>
        </div>
      </>
    );
  }
}
