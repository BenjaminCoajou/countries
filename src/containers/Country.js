import { connect } from 'react-redux';
import Country from '../components/Country';
import { getBorder } from '../reducers/home';

const mapStateToProps = (state) => ({
    country: state.home.country,
    isLoad : state.home.isLoaded,
    darkmode: state.header.darkmode,
    borderName: getBorder(state)
});

const mapDispatchToprops = {};

export default connect(mapStateToProps, mapDispatchToprops)(Country);