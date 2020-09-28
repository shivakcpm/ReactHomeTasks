import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ContextMenu from '../ContextMenu/ContextMenuComponent';
import DialogComponent from '../DialogComonent/DialogComponent';
import AddMovieComponent from '../AddMovie/AddMovieComponent';
import { MENU } from '../../consts/constants';
import DeleteMovieComponent from '../DeleteMovie/DeleteMovie';
import './MovieCard.css';

export default class MovieCardComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpenContext: false,
      isOpenEditDialog: false,
      isOpenDeleteDialog: false
    };
  }

  menuToggler = (isOpenContext, event) => {
    event.stopPropagation();
    this.setState({ isOpenContext });
  };

  onEdit = movie => {
    this.props.editMovie(movie);
    this.toggleEditMovieDialog();
  };

  onMenuItemClicked = (item, event) => {
    event.stopPropagation();
    this.setState({ isOpenContext: false });
    if (item === 'edit') {
      this.toggleEditMovieDialog();
    } else {
      this.toggleDeleteDialog();
    }
  };

  toggleEditMovieDialog = () => {
    this.setState({ isOpenEditDialog: !this.state.isOpenEditDialog });
  };

  toggleDeleteDialog = () => {
    this.setState({ isOpenDeleteDialog: !this.state.isOpenDeleteDialog });
  };

  onDelete = () => {
    this.props.deleteMovie(this.props.movie);
    this.toggleDeleteDialog();
  };

  render() {
    const {
      movie,
      movie: { title, releaseDate, category, src }
    } = this.props;

    return (
      <div className="movie-card" onClick={() => this.props.setMovieDetails(movie)}>
        <img src={src} alt={title}></img>
        <div className="menu-icon" onClick={event => this.menuToggler(true, event)}>
          &#xFE19; {this.contextType}{' '}
        </div>
        {this.state.isOpenContext && (
          <ContextMenu menu={MENU} onMenuItemClicked={this.onMenuItemClicked} closeHandler={this.menuToggler} />
        )}
        {this.state.isOpenEditDialog && (
          <DialogComponent toggle={this.toggleEditMovieDialog}>
            <AddMovieComponent editMode="true" movie={movie} onSubmit={this.onEdit}></AddMovieComponent>
          </DialogComponent>
        )}
        {this.state.isOpenDeleteDialog && (
          <DialogComponent toggle={this.toggleDeleteDialog}>
            <DeleteMovieComponent onDelete={this.onDelete}></DeleteMovieComponent>
          </DialogComponent>
        )}
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
  movie: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })
};
