import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../redux/actions/actions';

import Main from '../main';

function mapStateToProps(state) {
    return {
        posts: state.postsReducer,
        comments: state.commentsReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;