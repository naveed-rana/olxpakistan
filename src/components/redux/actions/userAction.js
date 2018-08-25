import axios from 'axios';
export const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
export const CREATEUSER = 'CREATEUSER';
export const CHECKEMAIL = 'CHECKEMAIL';


function createUser(message) {

    return {
        type:CREATEUSER,
        message
    }
}


export function startCreateUser(userData) {
    
    return (dispatch) => {
      
        axios.post(baseURL+'/user/signup',userData).then((response=>{
            alert();
            console.log(response);

        })).catch(err=>{
            console.log(err);
            
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
        alert(email);
        axios.post(baseURL+'/user/emailVerification',email).then((response=>{
        dispatch(emailVerification(response.data));
        })).catch(err=>{
            console.log(err); 
        });
    }
}

