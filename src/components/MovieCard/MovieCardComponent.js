import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ContextMenu from '../ContextMenu/ContextMenuComponent';
import { DialogComponent } from '../DialogComonent/DialogComponent';
import AddMovieComponent from '../AddMovie/AddMovieComponent';
import { myContext } from '../../contextProvider';
import './MovieCard.css';

export default class MovieCardComponent extends PureComponent {
    static contextType = myContext;
    constructor(props, context) {
        super(props);
        this.state = { displayContext:false, openDialog:false };
        this.context = context;
    }

    menuToggler = (displayContext) => {
        this.setState({ displayContext });
    }

    updateMovie = (movie) => {
        this.toggleModel();
        this.context.editMovie(movie);
    }

    onMenuItemClicked = (item) => {
        this.setState({ displayContext:false });
        this.toggleModel();
    }

    toggleModel= () => {
        if (this.state.openDialog) {
            document.body.classList.remove('hide-scroll');
        } else {
            document.body.classList.add('hide-scroll');
        }
        this.setState({ openDialog:!this.state.openDialog });
    }

    render() {
        const {
            movie: { title, releaseDate, category, src }
        } = this.props;
        const menu = ['Edit', 'Delete'];

        const contextMenuClass = classnames({
            show: this.state.displayContext,
            hide:!this.state.displayContext
        });

        return (
            <div className="movie-card">
                <img src={src} alt={title}></img>
                <div className="menu-icon" onClick={this.menuToggler.bind(this, true)}>&#xFE19; {this.contextType} </div>
                <div className={contextMenuClass}>
                    <ContextMenu menu={menu}  onMenuItemClicked= {this.onMenuItemClicked} closeHandler = {this.menuToggler}></ContextMenu>
                </div>
                <DialogComponent open={this.state.openDialog} toggle={this.toggleModel}>
                    <AddMovieComponent editMode="true" movie = {this.props.movie} onSubmit={this.updateMovie}></AddMovieComponent>
                </DialogComponent>
                <div className="card-footer">
                    <div className="title-info">
                        <div className="title">{title}</div>
                        <div className="year">{new Date(releaseDate).getFullYear()}</div>
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
        releaseDate:PropTypes.string.isRequired,
        category:PropTypes.string.isRequired,
        id:PropTypes.number.isRequired
    })
};
