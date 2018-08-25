import axios from 'axios';
import {toast} from 'react-toastify';
export const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
export const CREATEUSER = 'CREATEUSER';
export const CHECKEMAIL = 'CHECKEMAIL';

function creatUser(data) {
    return{
        type:CREATEUSER,
        data
    }
}

export function startCreateUser(userData) {
    
    return (dispatch) => {
      
        axios.post(baseURL+'/user/signup',userData).then((response=>{
            alert();
            toast.success(response.data);
            dispatch(creatUser(response.data));
        })).catch(err=>{
            toast.error(err);
        });
    }


}

function emailVerification(message) {
    return {
        type:CHECKEMAIL,
        message
    }
}


export function startEmailVerification(email){
    return (dispatch) =>{

        axios.post(baseURL+'/user/emailVerification',{email}).then((response=>{
        dispatch(emailVerification(response.data));
        })).catch(err=>{
            toast.error(err);
        });
    }
}

