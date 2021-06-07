import {SEARCH_COUNTRY} from '../actions/searchBar';

const initialState = {
    country: "",
};

const searchBar = (state = initialState, action = {}) => {
    switch(action.type) {
        case SEARCH_COUNTRY:
            return {
                ...state,
                country: action.payload,
            };
        default:
            return state;
    }
};

export default searchBar;