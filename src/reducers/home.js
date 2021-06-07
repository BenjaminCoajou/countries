import {FETCH_COUNTRIES_SUCCESS, SELECT_COUNTRY} from '../actions/home';
import {SEARCH_COUNTRY_SUCCESS} from '../actions/searchBar';

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
        case SEARCH_COUNTRY_SUCCESS:
            return {
                ...state,
                search: [...action.payload],
            }
        default:
            return state;
    }
};

export default home;