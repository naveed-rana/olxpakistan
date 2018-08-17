export const CREATEUSER = 'CREATEUSER';
import {baseURL} from './config';
import axois from 'axois';

function createUser(message) {

    return {
        type:CREATEUSER,
        message
    }
}
export function startCreateUser(userData) {

    return (dispatch) => {
        axois.post(baseURL+'/user/singup',userData).then((response=>{
            alert();
            console.log(response);
            

        })).catch(err=>{
            console.log(err);
            
        });
    }


}

