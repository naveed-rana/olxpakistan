import axios from 'axios';
export const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
export const CREATEUSER = 'CREATEUSER';


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

