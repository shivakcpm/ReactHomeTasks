import React, { createRef,  PureComponent } from 'react';
import './TopComponent.css';

export class TopComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.searchBar = createRef();
    }

    handleClick = () => {
        this.props.onSearch(this.searchBar.current.value);
    }

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
                        <input className="search-bar" ref={this.searchBar} placeholder="what do you want to watch?" />
                        <button className="search-button"  onClick={this.handleClick}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}
