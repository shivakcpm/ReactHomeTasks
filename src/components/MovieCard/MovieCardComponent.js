import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ContextMenu from '../ContextMenu/ContextMenuComponent';
import './MovieCard.css';

export default class MovieCardComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { display:false };
    }

    menuToggler = (display) => {
        this.setState({ display });
    }

    render() {
        const {
            movie: { title, year, category, src }
        } = this.props;
        const menu = ['Edit', 'Delete'];
        const contextMenuClass = classnames({
            show: this.state.display,
            hide:!this.state.display
        });

        return (
            <div className="movie-card">
                <img src={src} alt={title}></img>
                <div className="menu-icon" onClick={this.menuToggler.bind(this, true)}>&#xFE19;</div>
                <div className={contextMenuClass}>
                    <ContextMenu menu={menu} closeHandler = {this.menuToggler}></ContextMenu>
                </div>
                <div className="card-footer">
                    <div className="title-info">
                        <div className="title">{title}</div>
                        <div className="year">{year}</div>
                    </div>
                    <div className="category">{category}</div>
                </div>
            </div>
        );
    }
}

MovieCardComponent.propTypes = {
    movie:PropTypes.shape({
        src:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        year:PropTypes.string.isRequired,
        category:PropTypes.string.isRequired,
        id:PropTypes.number.isRequired
    })
};
