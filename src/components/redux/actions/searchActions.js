import axios from 'axios';
import {toast} from 'react-toastify';
const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';

export const MAPLOCATIONS = 'MAPLOCATIONS';
export const SEARCHTITLE = 'SEARCHTITLE';
export const GETSUGGESTIONS = 'GETSUGGESTIONS';


export function getMapState(data) {
      return {
          type: MAPLOCATIONS,
          data
      }
}
export function getTitleSearch(data) {
      return {
          type: SEARCHTITLE,
          data
      }
}
export function getSuggestions(data) {
    return {
        type: GETSUGGESTIONS,
        data
    }
}

// get suggestions

export function startGetSuggestions() {

    return (dispatch) =>{
        axios.get(baseURL+'/search/getsuggestions').then((response=>{
            console.log(response.data)
            dispatch(getSuggestions(response.data));
        }))
    }
}