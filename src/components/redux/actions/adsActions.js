import axios from 'axios';
import {toast} from 'react-toastify';
const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}
export const ADSPOSTING = 'ADSPOSTING';
export const ADSPOSTINGERR = 'ADSPOSTINGERR';
export const CLEARADSPOSTINGERR = 'CLEARADSPOSTINGERR';


export function clearAdsPosting() {
    return {
        type:CLEARADSPOSTINGERR
    }
}


function adsPosting(response) {
    return {
        type:ADSPOSTING,
        response
    }
}

function adsPostingErr(err) {
    return {
        type:ADSPOSTINGERR,
        err
    }
}

export function startAdsPosting(data) {
    return (dispatch)=>{
        axios.post(baseURL+'/ads/posting',data,config).then((response=>{
            toast.success(response.data);
            dispatch(adsPosting(response.data));
        })).catch(err=>{
            toast.error("Error occoured! while processing");
            dispatch(adsPostingErr(err));
        });
    }
}