import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as services from '../services/movieServices';
import rootReducer from './rootReducer';
import * as actions from '../store/actions';

export function getMoviesAsync(queryParams) {
    return async (dispatch) => {
        const response = await services.getMovies(queryParams);
        return dispatch(actions.getMoviesAction({moviesData:response}));
    };
}

export function deleteMovieAsync(pathParams) {
    return async (dispatch) => {
        const response = await services.deleteMovie(pathParams);
        return dispatch(actions.deleteMovieAction({moviesData:response}));
    };
}

export function editMovieAsync(payload) {
    return async (dispatch) => {
        const response =  services.editMovie(payload);
        return dispatch(actions.editMovieAction({moviesData:response}));
    };
}

export function addMovieAsync(payload) {
    return async (dispatch) => {
        const response =  services.addMovie(payload);
        return dispatch(actions.addMovieAction({moviesData:response}));
    };
}

export const store = createStore(rootReducer, applyMiddleware(thunk));

