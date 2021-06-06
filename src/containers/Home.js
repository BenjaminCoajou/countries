import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => ({
    countries : state.home.countries,
    isLoad : state.home.isLoaded,
});

const mapDispatchToprops = {};

export default connect(mapStateToProps, mapDispatchToprops)(Home);