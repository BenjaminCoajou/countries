export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const SELECT_COUNTRY = 'SELECT_COUNTRY';

export const fetchCountries = () => ({
    type: FETCH_COUNTRIES,
});

export const fetchCountriesSuccess = (payload) => ({
    type: FETCH_COUNTRIES_SUCCESS,
    payload,
});

export const selectCountry = (payload) => ({
    type: SELECT_COUNTRY,
    payload,
})