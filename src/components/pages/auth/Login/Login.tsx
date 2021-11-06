import React, {useState} from "react";
import {connect} from "react-redux";
import login from "src/store/actions/auth";
import './Login.scss';


const Login = ({login}: {login: any}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const getEmailFromInput = ({target: {value}}: {target: {value: string}}) => {
        setEmail(value)
    }

    const getPasswordFromInput = ({target: {value}}: {target: {value: string}}) => {
        setPassword(value)
    }

    return (
        <div className="login">
            <h1 className="title">Login</h1>
            <br />
            <input 
                type="text" 
                placeholder="Email"
                value={email}
                onChange={getEmailFromInput} />
            <br/>
            <input 
                type="text" 
                placeholder="Password"
                value={password}
                onChange={getPasswordFromInput} />
            <br/> 
            <button onClick={() => login(email, password)}>Sign in</button>
        </div>
    )
}


export default connect(null, login)(Login);