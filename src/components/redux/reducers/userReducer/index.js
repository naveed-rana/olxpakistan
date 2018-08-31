import {CHECKEMAIL,CREATEUSER,LOGIN,LOGINERR,SIGNUPERR,LOGOUT} from '../../actions/userAction';
const INITIAL_STATE = {
  user:{},
  userAccount:'',
  emailVerification:'',
  error:'',
  signupErr:''
};

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {

     case CREATEUSER:{
      return{
        ...state,
        userAccount:action.data
      }
     }
     case SIGNUPERR:{
       return {
         ...state,
         signupErr:action.err
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
     case LOGOUT:{
       return{
         ...state,
         user:{}
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