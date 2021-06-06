import axios from 'axios';
import {FETCH_COUNTRIES, fetchCountriesSuccess} from '../actions/home';

const homeMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case FETCH_COUNTRIES:
            
            axios.get("https://restcountries.eu/rest/v2/all")
            .then((response) => {
                store.dispatch(fetchCountriesSuccess(response.data))
                console.log('api ok', response.data)
                console.log('state', store.getState())
            })
            .catch((error) => {
                console.log('erreur api', error)
            });
        break;
        default:
            return next(action);
    }
};

export default homeMiddleware;