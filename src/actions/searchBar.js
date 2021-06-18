export const SEARCH_COUNTRY = 'SEARCH_COUNTRY';
export const SEARCH_COUNTRY_SUCCESS = 'SEARCH_COUNTRY_SUCCESS';

export const FILTER_COUNTRY = 'FILTER_COUNTRY';
export const FILTER_COUNTRY_SUCCESS = 'FILTER_COUNTRY_SUCCESS';

export const searchCountry = (payload) => ({
    type: SEARCH_COUNTRY,
    payload
});

export const searchCountrySuccess = (payload) => ({
    type: SEARCH_COUNTRY_SUCCESS,
    payload
});

export const filterCountry = (payload) => ({
    type: FILTER_COUNTRY,
    payload
})

export const filterCountrySuccess = (payload) => ({
    type: FILTER_COUNTRY_SUCCESS,
    payload
})