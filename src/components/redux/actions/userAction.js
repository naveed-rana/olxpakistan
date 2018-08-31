import axios from 'axios';
import {toast} from 'react-toastify';
const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
export const CREATEUSER = 'CREATEUSER';
export const CHECKEMAIL = 'CHECKEMAIL';
export const LOGIN = 'LOGIN';
export const LOGINERR = 'LOGINERR';
export const SIGNUPERR = 'SIGNUPERR';
export const LOGOUT = 'logout';






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

function creatUserErr(err) {
    return {
        type:SIGNUPERR,
        err
    }
}


export function startCreateUser(userData) {
    
    return (dispatch) => {
      
        axios.post(baseURL+'/user/signup',userData).then((response=>{
            toast.success(response.data);
            dispatch(creatUser(response.data));
        })).catch(err=>{
            toast.error("Error occoured! while processing");
            dispatch(creatUserErr(err));
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




function logoutUser() {
    return{
        type:LOGOUT
    }
}

export function startLogoutUser() {
    return (dispatch) => {
    
        axios.post(baseURL+'/user/logout').then((response=>{
            toast.success("Successfully Logout!");
            dispatch(logoutUser());
        })).catch(err=>{
            toast.error("Error ccoured! while logout");
        });
    }}