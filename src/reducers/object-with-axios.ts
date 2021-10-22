// import axios from 'axios';

// const API_URL = "https://salty-oasis-36055.herokuapp.com";

// enum Type{
//     string = ""
// }

const initialState = {notes: []}

export const postRequest = async ( state: any = initialState, action: any) => {
    // if(state === undefined){
    //     return {
    //         id: Type.string,
    //         email: Type.string,
    //         firstName: Type.string,
    //         lastName: Type.string
    //     }
    // }

    switch(action.type) {
        case "ADD_ITEMS":
            const notes = action.payload
            console.log(notes)
            return {
                ...state,
                notes: action.payload
            }
        case "LOGIN":
            return console.log("Log")
            // const res = await axios.post(`${API_URL}/auth/signIn`, { email: action.email, password: action.password });
            // return res.status === 200 ? {
            //     ...state,
            //     isLoggedIn: true,
            //     id: res.data.id,
            //     email: res.data.email,
            //     firsName: res.data.firstName,
            //     lastName: res.data.lastName,
            // } : console.log(res)
        case "REGISTRATION":
            return console.log("Reg")
            // const resp = await axios.post(`${API_URL}/users`, { email: action.email, firstName: action.firstName, lastName: action.lastName, password: action.password });
            // return resp.status === 200 ? {
            //     ...state,
            //     isLoggedIn: true,
            //     id: resp.data.id,
            //     email: resp.data.email,
            //     firsName: resp.data.firstName,
            //     lastName: resp.data.lastName,
            // } : console.log(resp)
        default:
            return state
    }
}