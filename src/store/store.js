import { createStore, applyMiddleware } from 'redux';
import * as services from '../services/movieServices';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

export function getMoviesActionAsync(queryParams) {
    return (dispatch) => {
        return services.getMovies(dispatch, queryParams);
    };
}

export function deleteMovieActionAsync(pathParams) {
    return (dispatch) => {
        return services.deleteMovie(dispatch, pathParams);
    };
}

export function editMovieActionAsync(payload) {
    return (dispatch) => {
        return services.editMovie(dispatch, payload);
    };
}

export function addMovieActionAsync(payload) {
    return (dispatch) => {
        return services.addMovie(dispatch, payload);
    };
}

export const store = createStore(rootReducer, applyMiddleware(thunk));

