import  rootReducer,{initialState} from './rootReducer';
import * as actions from './actions';


describe('rootReducer', () => {
    it('should return the initial state', () => {
      expect(rootReducer(undefined,{type:''})).toEqual(initialState);
    });

    it('should return the get movie state', () => {
        let payload = {moviesData:{data:[]}};
        expect(rootReducer(undefined,actions.getMoviesAction(payload))).toEqual(payload);
    });

    it('should return the edit movie state', () => {
        let payload = {moviesData:{data:[]}};
        expect(rootReducer(undefined,actions.editMovieAction(payload))).toEqual(payload);
    });

    it('should return the add movie state', () => {
        let payload = {moviesData:{data:[]}};
        expect(rootReducer(undefined,actions.addMovieAction(payload))).toEqual(payload);
    });
    it('should return the delete movie state', () => {
        let payload = {moviesData:{data:[]}};
        expect(rootReducer(undefined,actions.deleteMovieAction(payload))).toEqual(payload);
    });
});