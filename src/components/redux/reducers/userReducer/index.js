import {CHECKEMAIL,CREATEUSER} from '../../actions/userAction';
const INITIAL_STATE = {
  userAccount:'',
  emailVerification:'',
  
};

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {

     case CREATEUSER:{
      return{
        ...state,
        userAccount:action.data
      }
     }
     case CHECKEMAIL:{
       return {
         ...state,
         emailVerification:action.message
       }
     }
    default : return state;
  }
}

export default userReducer;