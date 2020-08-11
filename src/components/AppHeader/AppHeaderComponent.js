import React, { Component } from "react";
import "./AppHeader.css";

export class AppHeaderComponent extends Component {
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
            <button className="add-movie"> + ADD MOVIE</button>
          </div>

          <div className="find-movie-wrapper">
            <div className="find-movie">Find your Movie</div>
            <input className="search-bar" placeholder="what do you want to watch?" />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    );
  }
}
