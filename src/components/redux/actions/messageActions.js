import axios from 'axios';
import {toast} from 'react-toastify';
const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
export const MESSAGESEND = 'MESSAGESEND';
export const MESSAGERECIVE = 'MESSAGERECIVE';


function sendMessage(data) {
    return{
        type:MESSAGESEND,
        data
    }
}
export function startSendMessage(message) {
    
    return (dispatch) => {
        axios.post(baseURL+'/message/sendmessage',message).then((response=>{
            toast.success(response.data);
            dispatch(sendMessage(response.data));
        })).catch(err=>{
            toast.error("Error occoured! while processing");
            dispatch(sendMessage(err));
        });
    }


}

function getMessage(data) {
    return{
        type:MESSAGERECIVE,
        data
    }
}
export function startGetMessage(id) {
    
    return (dispatch) => {
        axios.get(baseURL+'/message/getmessage',{params:id}).then((response=>{
            dispatch(getMessage(response.data));
        })).catch(err=>{
            toast.error("Network Error!");
        });
    }


}

export function startSendTocken(data) {
    
    return (dispatch) => {
        axios.post(baseURL+'/tocken/post',data).then((response=>{
           console.log(response);
           
        }));
    }


}
