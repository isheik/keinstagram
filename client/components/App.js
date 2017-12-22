import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';


function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispachToProps(dispatch) {
    // this invokes dispatch automatically when actions creator functions are called.
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;