import { URLS } from './api';
import * as actions from '../store/actions';

export function getMovies(dispatch, queryParams) {
    const url = URLS.getUrl(URLS.MOVIES_URL, null, queryParams);
    return fetch(url).then(data => {
        return data.json();
    }).then((data) => {
        dispatch(actions.getMoviesAction({ movies:data }));
    }, () => {
        dispatch(actions.getMoviesAction({ movies:{} }));
    });
}


export function editMovie(dispatch, payload) {
    const url = URLS.getUrl(URLS.MOVIES_URL, null, null);
    return fetch(url, {method:'PUT', headers:{'Content-Type': 'application/json'}, body:JSON.stringify(payload)}).then(data => {
        return data.json();
    }).then((data) => {
        dispatch(actions.editMovieAction({ movies:data }));
    }, () => {
        dispatch(actions.editMovieAction({ movies:{} }));
    });
}

export function addMovie(dispatch, payload) {
    const url = URLS.getUrl(URLS.MOVIES_URL, null, null);
    return fetch(url, {method:'POST', headers:{'Content-Type': 'application/json'}, body:JSON.stringify(payload)}).then(data => {
        return data.json();
    }).then((data) => {
        dispatch(actions.addMovieAction({ movies:data }));
    }, () => {
        dispatch(actions.addMovieAction({ movies:{} }));
    });
}


export function deleteMovie(dispatch, pathParams) {
    const url = URLS.getUrl(URLS.MOVIE_BY_ID, pathParams, null);
    return fetch(url, {
        method: 'delete'
    }).then(() => {
        dispatch(actions.deleteMovieAction({movies:{} }));
    }, () => {
        dispatch(actions.deleteMovieAction({movies:{} }));
    });
}
