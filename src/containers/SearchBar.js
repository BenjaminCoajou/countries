import { connect } from 'react-redux';
import { searchCountry, filterCountry } from '../actions/searchBar';
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state) => ({
    darkmode: state.header.darkmode
});

const mapDispatchToprops = (dispatch) => ({
    inputChange: (country) => {
        dispatch(searchCountry(country))
    },
    filterSelect:  (region) => {
        dispatch(filterCountry(region))
    }
});

export default connect(mapStateToProps, mapDispatchToprops)(SearchBar);