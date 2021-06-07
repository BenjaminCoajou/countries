import axios from 'axios';
import {FETCH_COUNTRIES, fetchCountriesSuccess} from '../actions/home';
import {SEARCH_COUNTRY, searchCountrySuccess} from '../actions/searchBar';

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
        case SEARCH_COUNTRY:
            axios.get("https://restcountries.eu/rest/v2/name/"+action.payload)
            .then((response) => {
                store.dispatch(searchCountrySuccess(response.data))
                console.log('search ok')
            });
            break;
        default:
            return next(action);
    }
};

export default homeMiddleware;