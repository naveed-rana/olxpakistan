import { combineReducers } from 'redux';
import userReducer from './userReducer';
import adsReducer from './adsReducers';
import searchReducer from './searchReducers';

const rootReducer = combineReducers({
        user:userReducer,
        ads:adsReducer,
        search:searchReducer
});

export default rootReducer;
