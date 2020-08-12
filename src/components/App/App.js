import React, { Component } from "react";
import ContentHolderComponent from "../ContentHolder/ContentHolderComponent";
import { TopComponent } from "../TopComponent/TopComponent";
import "./App.css";
import   movies from '../../Movies.json';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {query:'',movies};
    this.onSearch = (query)=>{
      let filteredMovies = movies.filter((item)=>{return item.title.toLowerCase().indexOf(query.toLowerCase()) !==-1});
      this.setState({query,movies:filteredMovies});

    }
  }
  render() {
    return (
      <React.StrictMode>
        <div className="container">
          <TopComponent onSearch = {this.onSearch}/>
          <ContentHolderComponent movies={this.state.movies} />
        </div>
      </React.StrictMode>
    );
  }
}
