import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ContextMenu from '../ContextMenu/ContextMenuComponent';
import { DialogComponent } from '../DialogComonent/DialogComponent';
import AddMovieComponent from '../AddMovie/AddMovieComponent';
import { myContext } from '../../contextProvider';
import DeleteMovieComponent from '../DeleteMovie/DeleteMovie';
import './MovieCard.css';

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
        let contextMenu;
        let editMovieDialog;
        let deleteMovieDialog;
        if (this.state.displayContext) {
            contextMenu =
                <ContextMenu menu={menu}  onMenuItemClicked= {this.onMenuItemClicked} closeHandler = {this.menuToggler}></ContextMenu>;
        }
        if (this.state.openEditDialog) {
            editMovieDialog = <DialogComponent toggle={this.toggleEditMovieDialog}>
                <AddMovieComponent editMode="true" movie = {this.props.movie} onSubmit={this.updateMovie}></AddMovieComponent>
            </DialogComponent>;
        }
        if (this.state.openDeleteDialog) {
            deleteMovieDialog =  <DialogComponent toggle={this.toggleDeleteDialog}>
                <DeleteMovieComponent onDelete={this.deleteMovie} ></DeleteMovieComponent>
            </DialogComponent>;
        }

        return (
            <div className="movie-card">
                <img src={src} alt={title}></img>
                <div className="menu-icon" onClick={this.menuToggler.bind(this, true)}>&#xFE19; {this.contextType} </div>
                {contextMenu}
                {editMovieDialog}
                {deleteMovieDialog}
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
