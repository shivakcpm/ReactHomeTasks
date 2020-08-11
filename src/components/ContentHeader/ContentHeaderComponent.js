import React, { Component } from "react";
import TabComponent from "../TabComponent/TabComponent";
import './ContentHeader.css'
import MovieListComponent from "../MovieList/MovieListComponent";
import { Fragment } from "react";


export default class ContentHeaderComponent extends Component {
    constructor(props){   
        super(props);
        this.tabs = ['All','Documentory','Comedy','Horror','Crime'];
        this.onTabChange=(index)=>{
            console.log(this.tabs[index]);
        };
    }
  render() {
      let movies = [
        {
          title: "Pulp Fiction",
          src: "/pulp-fiction.png",
          year: "2004",
          category: "Action & Adventure",
        },
        {
          title: "Inception",
          src: "/inception.png",
          year: "1994",
          category: "Action & Adventure",
        },
        {
          title: "Bohemian Rhapsody",
          src: "/bohemian.png",
          year: "2004",
          category: "Drama, Biography, Music",
        },
        {
          title: "Kill the bill",
          src: "/killthebill.png",
          year: "1994",
          category: "Oscar Winning Movie",
        },
        {
          title: "Bohemian Rhapsody",
          src: "/bohemian.png",
          year: "2004",
          category: "Drama, Biography, Music",
        },
        {
          title: "Inception",
          src: "/inception.png",
          year: "2003",
          category: "Action & Adventure",
        },
        {
          title: "Pulp Fiction",
          src: "/pulp-fiction.png",
          year: "2004",
          category: "Action & Adventure",
        },
        {
          title: "Bohemian Rhapsody",
          src: "/bohemian.png",
          year: "2004",
          category: "Drama, Biography, Music",
        },
      ];
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
      <MovieListComponent movies={movies} />
      </div>
         <div className="footer-bar">
         <strong>netflix</strong>
         <span>roulette</span>
       </div>
       </Fragment>
    );
  }
}
