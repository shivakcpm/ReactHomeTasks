import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ContextMenu from '../ContextMenu/ContextMenuComponent';
import { DialogComponent } from '../DialogComonent/DialogComponent';
import AddMovieComponent from '../AddMovie/AddMovieComponent';
import { myContext } from '../../contextProvider';
import './MovieCard.css';
import DeleteMovieComponent from '../DeleteMovie/DeleteMovie';

export default class MovieCardComponent extends PureComponent {
    static contextType = myContext;
    constructor(props, context) {
        super(props);
        this.state = { displayContext:false, openEditDialog:false, openDeleteDialog:false };
        this.context = context;
    }

    menuToggler = (displayContext) => {
        this.setState({ displayContext });
    }

    updateMovie = (movie) => {
        this.toggleEditMovieDialog();
        this.context.editMovie(movie);
    }

    onMenuItemClicked = (item) => {
        this.setState({ displayContext:false });
        if (item.toLowerCase() === 'edit') {
            this.toggleEditMovieDialog();
        } else {
            this.toggleDeleteDialog();
        }
    }

    toggleEditMovieDialog= () => {
        this.toggleBodyScroll(this.state.openEditDialog);
        this.setState({ openEditDialog:!this.state.openEditDialog });
    }

    toggleBodyScroll(hide) {
        if (hide) {
            document.body.classList.remove('hide-scroll');
        } else {
            document.body.classList.add('hide-scroll');
        }
    }

    toggleDeleteDialog = () => {
        this.toggleBodyScroll(this.state.openDeleteDialog);
        this.setState({ openDeleteDialog:!this.state.openDeleteDialog });
    }

    deleteMovie = () => {
        this.toggleDeleteDialog();
        this.context.deleteMovie(this.props.movie);
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
                <DialogComponent open={this.state.openEditDialog} toggle={this.toggleEditMovieDialog}>
                    <AddMovieComponent editMode="true" movie = {this.props.movie} onSubmit={this.updateMovie}></AddMovieComponent>
                </DialogComponent>
                <DialogComponent open={this.state.openDeleteDialog} toggle={this.toggleDeleteDialog}>
                    <DeleteMovieComponent onDelete={this.deleteMovie} ></DeleteMovieComponent>
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
