import {ADSPOSTING, ADSPOSTINGERR, CLEARADSPOSTINGERR} from '../../actions/adsActions';
const INITIAL_STATE = {
    adsSuccess: '',
    adsErr: ''

};

function adsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case ADSPOSTING:
            {
                return {
                    ...state,
                    adsSuccess: action.response
                }
            }
        case ADSPOSTINGERR:
            {
                return {
                    ...state,
                    adsErr: action.err
                }
            }
        case CLEARADSPOSTINGERR:
            {
                return {
                    ...state,
                    adsSuccess: '',
                    adsErr:''
                }
            }

        default:
            return state;
    }
}

export default adsReducer;