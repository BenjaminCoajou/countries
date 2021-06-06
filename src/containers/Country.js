import { connect } from 'react-redux';
import Country from '../components/Country';

const mapStateToProps = (state) => ({
    country: state.home.country,
    isLoad : state.home.isLoaded,
    darkmode: state.header.darkmode,
});

const mapDispatchToprops = {};

export default connect(mapStateToProps, mapDispatchToprops)(Country);