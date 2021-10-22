import React, {useState} from "react";
import {connect} from "react-redux";
import thunkLogin from "src/reducers/thunk";

const Home = ({thunkLogin}: {thunkLogin: any}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const getEmailFromInput = ({target: {value}}: {target: {value: string}}) => {
        setEmail(value)
    }

    const getPasswordFromInput = ({target: {value}}: {target: {value: string}}) => {
        setPassword(value)
    }

    return (
        <div className="home">
            <h1>Home Page</h1>
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
            <button onClick={() => thunkLogin({email, password})}>Sign in</button>
        </div>
    )
}


export default connect(null, thunkLogin)(Home);