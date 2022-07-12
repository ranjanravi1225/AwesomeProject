import {legacy_createStore as createStore} from 'redux';
import testReducer from '../reducers/testReducer';

const store = createStore(testReducer);

export default store;
