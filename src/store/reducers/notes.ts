import {ActionTypes} from "src/shared/models/actionTypes";

const initialState: any[] = [];

export const notes = ( state: any = initialState, action: any) => {

    switch(action.type) {
        case ActionTypes.ADD_NOTES:
            return action.payload;
        default:
            return state
    }
}