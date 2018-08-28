import axios from 'axios';
import {toast} from 'react-toastify';
const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}
export const ADSPOSTING = 'ADSPOSTING';


function adsPosting(response) {
    return {
        type:ADSPOSTING,
        response
    }
}

export function startAdsPosting(data) {
    return (dispatch)=>{
        alert("call fun")
        axios.post(baseURL+'/ads/posting',data,config).then((response=>{
            toast.success(response.data);
            alert("resp");
           // dispatch(creatUser(response.data));
        })).catch(err=>{
            toast.error("Error occoured! while processing");
        });
    }
}