import {CHECKEMAIL,CREATEUSER,LOGIN,LOGINERR} from '../../actions/userAction';
const INITIAL_STATE = {
  user:{},
  userAccount:'',
  emailVerification:'',
  error:''
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
     case LOGIN:{
       return{
         ...state,
         user:action.user
       }
     }
     case LOGINERR:{
       return{
         ...state,
         error:action.err
       }
     }
    default : return state;
  }
}

export default userReducer;