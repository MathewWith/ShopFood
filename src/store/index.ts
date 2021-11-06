import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducer from 'src/store/reducers';
import actions from 'src/store/actions';


const store = createStore(reducer, applyMiddleware(Object.assign(thunk, actions)))

export default store;             