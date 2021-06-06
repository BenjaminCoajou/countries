import {FETCH_COUNTRIES_SUCCESS} from '../actions/home';

const initialState = {
    countries: [],
    isLoaded: false,
};

const home = (state = initialState, action = {}) => {
    switch(action.type) {
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: [...action.payload],
                isLoaded: !state.isLoaded,
            };
            default:
                return state;
    }
};

export default home;