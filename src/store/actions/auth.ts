import axios from "axios";
import {API_URL} from "src/shared/consts/api-url";
import {ActionTypes} from "src/shared/models/actionTypes";


const login = (email: string, password: string) => {
    return async (dispatch: any) => {
        console.log(email,password)
        dispatch({type: ActionTypes.LOGIN})
        const {data:{token}} = await axios.post(`${API_URL}/auth/signIn`, { email, password });
        console.log("Token: ", token)
        localStorage.setItem("JWT", token)
        // const isLoggedIn = true;
    //     if(token) {
    //         dispatch({
    //             type: ActionTypes.REGISTRATION,
    //             payload: isLoggedIn
    //         })
    //     }
    }
} 

const registration = (email: string, password: string, firstName: string, lastName: string) => {
    return async (dispatch: any) => {
        console.log(email, firstName, lastName, password)
        // const isLoggedIn = true;
         await axios.post(`${API_URL}/users`, { email, firstName, lastName, password });
        // if(res.status > 199 && res.status < 300) {
        //     dispatch({
        //         type: ActionTypes.REGISTRATION,
        //         payload: isLoggedIn
        //     })
        // }
    }
}



export default {login, registration};