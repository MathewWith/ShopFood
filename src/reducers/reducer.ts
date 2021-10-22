import { combineReducers } from "redux";
import { postRequest } from "./object-with-axios"
import { setLog } from "./object-without-axios";



export default combineReducers({
    postRequest,
    setLog
  })


// const reducer = async (state: any , action:any) => {

//     return{
//         withAxios: postRequest(state, action),
//         withoutAxios: setLog(state, action)
//     }
// }

// export default reducer;