import React, { Component } from "react";
import TabComponent from "../TabComponent/TabComponent";
import MovieListComponent from "../MovieList/MovieListComponent";
import { Fragment } from "react";
import './ContentHolder.css'
import { ErrorBoundaryComponent } from "../ErrorBoundary/ErrorBoundaryComponent";


export default class ContentHolderComponent extends Component {
    constructor(props){   
        super(props);
        this.state = {};
        this.tabs = ['All','Documentory','Comedy','Horror','Crime'];
        this.onTabChange=(index)=>{
            console.log(this.tabs[index]);
        };
    }

  render() {    
    return (
        <Fragment>
        <div className="content-wrapper">
        <div className="nav-head">
        <TabComponent tabs={this.tabs} tabChanged={this.onTabChange}/>
        <div className="sort-container">
          <span>SORT BY</span>
          <select>
              <option value="releaseDate">RELEASE DATE</option>
              <option value="name">NAME </option>
          </select>
        </div>
      </div>
      <ErrorBoundaryComponent key={this.props.movies.length} >
      <MovieListComponent movies={this.props.movies} />
      </ErrorBoundaryComponent>

      </div>
         <div className="footer-bar">
         <strong>netflix</strong>
         <span>roulette</span>
       </div>
       </Fragment>
    );
  }
}
