import {API_URL} from "src/shared/consts/api-url";
import axios from "axios";
import {sortNotesByPosition} from "src/shared/helpers/sortNotesByPosition";
import {ActionTypes} from "src/shared/models/actionTypes";


const getNotes = () => {
    return (dispatch: any) => {
        axios.get(`${API_URL}/notes/`).then(({data}) => {
            sortNotesByPosition(data)
            dispatch({
                type: ActionTypes.ADD_NOTES,
                payload: data
            })
        })
    }
}
 

// eslint-disable-next-line import/no-anonymous-default-export
export default {getNotes}