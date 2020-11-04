import { URLS } from './api';


export function getMovies(queryParams) {
  const url = URLS.getUrl(URLS.MOVIES_URL, null, queryParams);
  return fetch(url)
    .then(data => {
      return data.json();
    });
}

export function editMovie(payload) {
  const url = URLS.getUrl(URLS.MOVIES_URL, null, null);
  return fetch(url, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: stringifyValue(payload) })
    .then(data => {
      return data.json();
    });
}

export function addMovie(payload) {
  const url = URLS.getUrl(URLS.MOVIES_URL, null, null);
  return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: stringifyValue(payload) })
    .then(data => {
      return data.json();
    });
}

export function deleteMovie(pathParams) {
  const url = URLS.getUrl(URLS.MOVIE_BY_ID, pathParams, null);
  return fetch(url, {
    method: 'delete'
  });
}

export function getMovie(pathParams) {
  const url = URLS.getUrl(URLS.MOVIE_BY_ID, pathParams, null);
  return fetch(url);
}

function stringifyValue(payload) {
    return JSON.stringify(payload);
}
