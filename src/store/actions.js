export const GET_MOVIES = 'GET_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const ADD_MOVIE = 'ADD_MOVIE';

export function getMoviesAction(payload) {
    return { type:GET_MOVIES, payload };
}

export function editMovieAction(payload) {
    return { type:EDIT_MOVIE, payload };
}

export function deleteMovieAction(payload) {
    return { type:DELETE_MOVIE, payload };
}

export function addMovieAction(payload) {
    return { type:ADD_MOVIE, payload };
}
