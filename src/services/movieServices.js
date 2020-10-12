import { URLS } from './api';
import * as actions from '../store/actions';

export function getMovies(dispatch, queryParams) {
  const url = URLS.getUrl(URLS.MOVIES_URL, null, queryParams);
  return fetch(url)
    .then(data => {
      return data.json();
    })
    .then(
      data => {
        dispatch(actions.getMoviesAction({ moviesData: data }));
      },
      () => {
        dispatch(actions.getMoviesAction({ moviesData: {} }));
      }
    );
}

export function editMovie(dispatch, payload) {
  const url = URLS.getUrl(URLS.MOVIES_URL, null, null);
  return fetch(url, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: stringifyValue(payload) })
    .then(data => {
      return data.json();
    })
    .then(
      data => {
        dispatch(actions.editMovieAction({ moviesData: data }));
      },
      () => {
        dispatch(actions.editMovieAction({ moviesData: {} }));
      }
    );
}

export function addMovie(dispatch, payload) {
  const url = URLS.getUrl(URLS.MOVIES_URL, null, null);
  return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: stringifyValue(payload) })
    .then(data => {
      return data.json();
    })
    .then(
      data => {
        dispatch(actions.addMovieAction({ moviesData: data }));
      },
      () => {
        dispatch(actions.addMovieAction({ moviesData: {} }));
      }
    );
}

export function deleteMovie(dispatch, pathParams) {
  const url = URLS.getUrl(URLS.MOVIE_BY_ID, pathParams, null);
  return fetch(url, {
    method: 'delete'
  })
  .finally(() => {
    dispatch(actions.deleteMovieAction({ moviesData: {} }));
  });
}

function stringifyValue(payload) {
    return JSON.stringify(payload);
}
