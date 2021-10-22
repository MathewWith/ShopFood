export const setLog = (state: any, action: any) => {
    if(state === undefined){
        return {
            isLoggedIn: false
        }
    }
    
    switch(action.type){
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false
            }  
        case "EMAIL":
            return {
                ...state,
                email: action.payload
            }
        case "PASSWORD":
            return {
                ...state,
                password: action.payload
            } 
        default: 
            return state       
    }
}