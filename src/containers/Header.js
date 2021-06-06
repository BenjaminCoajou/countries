import { connect } from 'react-redux';
import { selectDarkmode } from '../actions/header';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
    darkmode: state.header.darkmode
});

const mapDispatchToprops = (dispatch) => ({
    handleDarkmodeClick: () => {
        dispatch(selectDarkmode())
    },
});

export default connect(mapStateToProps, mapDispatchToprops)(Header);