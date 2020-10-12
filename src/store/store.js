import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as services from '../services/movieServices';
import rootReducer from './rootReducer';


export function getMoviesAsync(queryParams) {
    return (dispatch) => {
        return services.getMovies(dispatch, queryParams);
    };
}

export function deleteMovieAsync(pathParams) {
    return (dispatch) => {
        return services.deleteMovie(dispatch, pathParams);
    };
}

export function editMovieAsync(payload) {
    return (dispatch) => {
        return services.editMovie(dispatch, payload);
    };
}

export function addMovieAsync(payload) {
    return (dispatch) => {
        return services.addMovie(dispatch, payload);
    };
}

export const store = createStore(rootReducer, applyMiddleware(thunk));

