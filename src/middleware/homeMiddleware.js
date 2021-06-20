import axios from 'axios';
import {FETCH_COUNTRIES, fetchCountriesSuccess} from '../actions/home';
import {SEARCH_COUNTRY, searchCountrySuccess, FILTER_COUNTRY, filterCountrySuccess} from '../actions/searchBar';

const homeMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case FETCH_COUNTRIES:
            
            axios.get("https://restcountries.eu/rest/v2/all")
            .then((response) => {
                store.dispatch(fetchCountriesSuccess(response.data))
            })
            .catch((error) => {
                console.log('erreur api', error)
            });
            break;
        case SEARCH_COUNTRY:
            axios.get("https://restcountries.eu/rest/v2/name/"+action.payload)
            .then((response) => {
                store.dispatch(searchCountrySuccess(response.data))
            });
            break;
            case FILTER_COUNTRY:
                if(action.payload === "all") {
                    axios.get("https://restcountries.eu/rest/v2/all")
                    .then((response) => {
                        store.dispatch(fetchCountriesSuccess(response.data)) 
                    });                  
                }
                else {
                    axios.get("https://restcountries.eu/rest/v2/region/"+action.payload)
                    .then((response) => {
                        store.dispatch(filterCountrySuccess(response.data))
                    });
                }
                break;
        default:
            return next(action);
    }
};

export default homeMiddleware;