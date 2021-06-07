export const SEARCH_COUNTRY = 'SEARCH_COUNTRY';

export const SEARCH_COUNTRY_SUCCESS = 'SEARCH_COUNTRY_SUCCESS';

export const searchCountry = (payload) => ({
    type: SEARCH_COUNTRY,
    payload
});

export const searchCountrySuccess = (payload) => ({
    type: SEARCH_COUNTRY_SUCCESS,
    payload
});