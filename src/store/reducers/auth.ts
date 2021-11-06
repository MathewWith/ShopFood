import {ActionTypes} from "src/shared/models/actionTypes";


const initialState: any = {
    isLoggedIn: true
};

export const auth = (state: any = initialState, action: any ) => {

    switch(action.type) {
        case ActionTypes.REGISTRATION:
            return action.payload;
        default:
            return state
    }
}

