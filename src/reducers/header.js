import {SELECT_DARKMODE} from '../actions/header';

const initialState = {
    darkmode: false
};

const header = (state = initialState, action = {}) => {
    switch(action.type) {
        case SELECT_DARKMODE:
            return {
                ...state,
                darkmode: !state.darkmode,
            };
        
        default:
            return state;
    }
};

export default header;