import { combineReducers } from 'redux';
import userReducer from './userReducer';
import adsReducer from './adsReducers';
import searchReducer from './searchReducers';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
        user:userReducer,
        ads:adsReducer,
        search:searchReducer,
        messages:messageReducer
});

export default rootReducer;
