import {MESSAGESEND,MESSAGERECIVE} from '../../actions/messageActions';
const INITIAL_STATE = {
    messageReq: '',
    messages:[]
};

function searchReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case MESSAGESEND:{
            return{
                ...state,
                messageReq:action.data
            }
        }
        case MESSAGERECIVE:{
            return{
                ...state,
                messages:action.data
            }
        }
        default:
            return state;
    }
}

export default searchReducer;