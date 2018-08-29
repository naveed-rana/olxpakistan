import {ADSPOSTING,ADSPOSTINGERR} from '../../actions/adsActions';
const INITIAL_STATE = {
  adsSuccess : '',
  adsErr:''

};

function adsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {

     case ADSPOSTING:{
      return{
        ...state,
        adsSuccess:action.response
      }
     }
     case ADSPOSTINGERR:{
      return{
        ...state,
        adsErr:action.err
      }
     }

    default : return state;
  }
}

export default adsReducer;