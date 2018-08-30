import axios from 'axios';
import {toast} from 'react-toastify';
const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';

export const MAPLOCATIONS = 'MAPLOCATIONS';
export const SEARCHTITLE = 'SEARCHTITLE';
export const GETSUGGESTIONS = 'GETSUGGESTIONS';
export const GETADS = 'GETADS';
export const GETADSUSERAds = 'GETADSUSERAds';


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

function getAds(data) {
    return{
        type:GETADS,
        data
    }
}

//gettings ads
export function startGetAds(req) {
    
    return (dispatch) =>{
        axios.get(baseURL+'/search/getads',{params:req}).then((response=>{
            console.log(response.data)
            dispatch(getAds(response.data));
        }))
    }
}

function getUserAds(data) {
    return{
        type:GETADSUSERAds,
        data
    }
}
//getting user ads
export function startGetUserAds(id) {
    
    return (dispatch) =>{
        axios.get(baseURL+'/search/getuserads',{params:{id}}).then((response=>{
            console.log(response.data)
            dispatch(getAds(response.data));
        }))
    }
}