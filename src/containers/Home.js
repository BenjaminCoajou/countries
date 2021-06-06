import { connect } from 'react-redux';
import { selectCountry } from '../actions/home';
import Home from '../components/Home';

const mapStateToProps = (state) => ({
    countries : state.home.countries,
    isLoad : state.home.isLoaded,
});

const mapDispatchToprops = (dispatch) => ({
    handleCountryClick: (country) => {
        dispatch(selectCountry(country))
    },
});

export default connect(mapStateToProps, mapDispatchToprops)(Home);