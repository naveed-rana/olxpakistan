import {CHECKEMAIL } from '../../actions/userAction';
const INITIAL_STATE = {
  user: {},
  emailVerification:'',
  flag:false,
  flagNetworkerror:false
  
};

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {

     case CHECKEMAIL:{
       debugger;
       return {
         ...state,
         emailVerification:action.message
       }
     }
    default : return state;
  }
}

export default userReducer;