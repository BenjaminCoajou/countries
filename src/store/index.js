import {createStore, compose, applyMiddleware} from 'redux';

import rootReducer from '../reducers';
import homeMiddleware from '../middleware/homeMiddleware';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enchancers = composeEnchancers(
    applyMiddleware(
        
        homeMiddleware,
    ),
);

const store = createStore(
    rootReducer,
    enchancers,
);

export default store;