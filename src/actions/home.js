export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';

export const fetchCountries = () => ({
    type: FETCH_COUNTRIES,
});

export const fetchCountriesSuccess = (payload) => ({
    type: FETCH_COUNTRIES_SUCCESS,
    payload,
});