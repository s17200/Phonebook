import {legacy_createStore} from 'redux';
import phonebookReducer from './reducer';

let store=legacy_createStore(phonebookReducer)

export default store;