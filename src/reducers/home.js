import {FETCH_COUNTRIES_SUCCESS, SELECT_COUNTRY} from '../actions/home';
import {SEARCH_COUNTRY_SUCCESS, FILTER_COUNTRY_SUCCESS} from '../actions/searchBar';

const initialState = {
    countries: [],
    isLoaded: false,
    country: [],
    bo: []
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
            };
        case FILTER_COUNTRY_SUCCESS:
            return {
                ...state,
                countries: action.payload,
            };
        default:
            return state;
    }
};
export const getBorder = (state) => {
    let bo = [];
    if(state.home.country[0].borders){

        state.home.country[0].borders.forEach(border => {
            bo.push(state.home.countries.find(name => name.alpha3Code === border))
        })
        return bo.map(n => (n.name))
    }
}

        
export default home;