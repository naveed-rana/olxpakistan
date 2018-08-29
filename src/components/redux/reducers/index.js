import { combineReducers } from 'redux';
import userReducer from './userReducer';
import adsReducer from './adsReducers';

const rootReducer = combineReducers({
        user:userReducer,
        ads:adsReducer
});

export default rootReducer;
