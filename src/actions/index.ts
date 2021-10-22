
enum Actions{
    LOGIN = "LOGIN",
    REGISTRATION = "REGISTRATION"
}

const login = ({email, password}: {email: string, password: string}) => {
    console.log(email, password)
    return {
        type: Actions.LOGIN,
        email,
        password
    }
} 

const registration = ({email, password, firstName, lastName}:
                     {email: string, password: string, firstName: string, lastName: string}) => {
    return {
        type: Actions.REGISTRATION,
        email,
        password,
        firstName,
        lastName
    }
} 


const isLogin = () =>{
    return {
        type: "LOG"
    }
}

const isLogout = () =>{
    return {
        type: "LOGOUT"
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {isLogin, isLogout, login, registration};