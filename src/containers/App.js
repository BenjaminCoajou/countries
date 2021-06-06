import {connect} from 'react-redux';
import App from '../components/App';

import {fetchCountries} from '../actions/home';

const mapStateToProps = null;

const mapDispatchToprops = (dispatch) => ({
    fetchCountries: () => {
        console.log("je dois aller chercher les pays")
        dispatch(fetchCountries());
    }
});

export default connect(mapStateToProps, mapDispatchToprops)(App);