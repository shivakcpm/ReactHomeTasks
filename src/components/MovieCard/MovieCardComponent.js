import React, { PureComponent } from "react";

import './MovieCard.css'


export default class MovieCardComponent extends PureComponent {
  render() {
    
    return (
<div className="movie-card" >
    <img src={this.props.movie.src} alt={this.props.movie.title}></img>
    <div className="menu-icon">&#xFE19;</div>
    <div className="card-footer">
    <div className="title-info">
        <div className="title">{this.props.movie.title}</div>
        <div className="year"> {this.props.movie.year}</div>
    </div>
    <div className="category"> {this.props.movie.category}</div>
    </div>

</div>
    );
  }
}
