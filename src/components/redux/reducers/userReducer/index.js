
const INITIAL_STATE = {
  user: {},
  flag:false,
  flagNetworkerror:false
  
};

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
     case 'unset':{
       return {
         user:{}
       }
     }
    default : return state;
  }
}

export default userReducer;