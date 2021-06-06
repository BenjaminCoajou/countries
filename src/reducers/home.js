import {FETCH_COUNTRIES_SUCCESS, SELECT_COUNTRY} from '../actions/home';

const initialState = {
    countries: [],
    isLoaded: false,
    country: []
};

const home = (state = initialState, action = {}) => {
    switch(action.type) {
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: [...action.payload],
                isLoaded: !state.isLoaded,
            };
        case SELECT_COUNTRY: 
            return {
                ...state,
                country: [state.countries.find(e => e.alpha3Code === action.payload)]
            };
        default:
            return state;
    }
};

export default home;