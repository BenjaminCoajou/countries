import {combineReducers} from 'redux';

import home from './home';
import header from './header';
import searchBar from './searchBar';

export default combineReducers({
    home,
    header,
    searchBar,
});