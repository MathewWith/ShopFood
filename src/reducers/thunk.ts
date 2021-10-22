import axios from "axios";
import {ADD_ITEMS, ADD_ITEMS_FAILURE} from "src/actionTypes";
const API_URL = "https://salty-oasis-36055.herokuapp.com";


const thunkLogin = ({email, password}: {email: string, password: string}) => {
    return async (dispatch: any) => {
        console.log("Hello from thunk")
        dispatch({type: "LOGIN"})
        const {data:{token}} = await axios.post(`${API_URL}/auth/signIn`, { email, password });
        localStorage.setItem("JWT", token)

    }
} 

const thunkRegistration = ( {email, password, firstName, lastName}:
                            {email: string, password: string, firstName: string, lastName: string}) => {
    return async (dispatch: any, getState: any) => {
        console.log("Hello from think")
        dispatch({type: "REGISTRATION"})
        const resp = await axios.post(`${API_URL}/users`, 
        { email: email, firstName: firstName, lastName: lastName, password: password });
            return console.log(resp)
    }
}

const getItems = () => async (dispatch: any) => {
    // try{
        const response = await axios.get('https://salty-oasis-36055.herokuapp.com/notes/')
        console.log("122" , response.data);
        dispatch({
            type: ADD_ITEMS,
            payload: response.data
        })
    // }
    //  catch(err) {
    //     dispatch({
    //         type: ADD_ITEMS_FAILURE,
    //         payload: err
    //     })
    // }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {thunkLogin, thunkRegistration, getItems};