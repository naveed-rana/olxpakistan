import axios from 'axios';
import {toast} from 'react-toastify';
const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
export const CREATEUSER = 'CREATEUSER';
export const CHECKEMAIL = 'CHECKEMAIL';
export const LOGIN = 'LOGIN';
export const LOGINERR = 'LOGINERR';


function loginUser(user) {
    return{
        type:LOGIN,
        user
    }
}

function loginErr(err) {
    return{
        type:LOGINERR,
        err
    }
}

export function startLoginUser(userData) {
    
    return (dispatch) => {
    
        axios.post(baseURL+'/user/login',userData).then((response=>{
            toast.success("Successfully login!");
            dispatch(loginUser(response.data));
        })).catch(err=>{
            toast.error("Error occoured!Please use correct email and password");
            dispatch(loginErr(err));
        });
    }


}
export function startGetUser() {
    
    return (dispatch) => {
    
        axios.get(baseURL+'/user/authenticate').then((response=>{
            dispatch(loginUser(response.data));
        })).catch(err=>{
              dispatch(loginErr(err));
        });
    }


}

function creatUser(data) {
    return{
        type:CREATEUSER,
        data
    }
}


export function startCreateUser(userData) {
    
    return (dispatch) => {
      
        axios.post(baseURL+'/user/signup',userData).then((response=>{
            toast.success(response.data);
            dispatch(creatUser(response.data));
        })).catch(err=>{
            toast.error("Error occoured! while processing");
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

