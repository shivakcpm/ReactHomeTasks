import React, { useEffect, useState } from 'react';
import { concatStrings } from '../../utils';
import { getMovie } from '../../services/movieServices';
import { useHistory } from 'react-router-dom';
import HeaderBarComponent from '../HeaderBarComponent/HeaderBarComponent';
import './MovieDetails.css';

const MovieDetails = props => {
  const [movie, setMovie] = useState(null);
  // const [id,setId] = useState(props.id);
  const history = useHistory();

  useEffect(() => {
    getMovie({ id:props.id })
    .then(data => data.json())
    .then(res => {
      setMovie(res);
    });
  }, [props.id]);

  return (
    <div className="header-wrapper">
      <div className="image-holder"></div>
      <div className="content-holder">
        <div className="top-bar">
          <HeaderBarComponent/>
          <img src="/public/searchIcon.PNG" onClick={() => history.push('/home')} />
        </div>
        {movie &&
          <div className="movie-details-parent">
            <img className="details-image" src={movie.poster_path} />
            <div className="details-wrapper">
              <span className="movie-title">{movie.title}</span>
              <span className="rating">{movie.vote_average}</span>
              <div className="category">{concatStrings(movie.genres)}</div>
              <span className="release-date color-red">{new Date(movie.release_date).getFullYear()}</span>
              <span className="color-red">{movie.runtime} min</span>
              <p>{movie.overview}</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default MovieDetails;
