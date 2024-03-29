import {connect} from 'react-redux';
import App from '../components/App';

import {fetchCountries} from '../actions/home';

const mapStateToProps = null;

const mapDispatchToprops = (dispatch) => ({
    fetchCountries: () => {
        dispatch(fetchCountries());
    }
});

export default connect(mapStateToProps, mapDispatchToprops)(App);