import { connect } from 'react-redux';
import { searchCountry } from '../actions/searchBar';
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state) => ({
    darkmode: state.header.darkmode
});

const mapDispatchToprops = (dispatch) => ({
    inputChange: (country) => {
        dispatch(searchCountry(country))
    },
});

export default connect(mapStateToProps, mapDispatchToprops)(SearchBar);