import * as actions from './actions';

export const initialState = {
    moviesData:{data:[]}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_MOVIES:
        case action.ADD_MOVIE:
        case action.DELETE_MOVIE:
        case action.EDIT_MOVIE:
            return { ...state, ...action.payload };
        default:
            return  state;
    }
};

export default rootReducer;
