import React, {useState} from 'react';
import thunkRegistration from 'src/reducers/thunk';
import {connect} from 'react-redux';

const Unprotected = ({thunkRegistration}: {thunkRegistration: any}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")


    const Email = ({ target: { value }}: {target: {value: string }}) => {
        setEmail(value)
    }
    const Password = ({target: {value}}: {target: {value: string}}) => {
        setPassword(value)
    }
    const FirstName = ({target: {value}}: {target: {value: string}}) => {
        setFirstName(value)
    }
    const LastName = ({target: {value}}: {target: {value: string}}) => {
        setLastName(value)
    }
    console.log(email, firstName, lastName, password)

    return (
        <div className="unprotected">
            <input 
                type="text" 
                placeholder="Email"
                value={email} 
                onChange={Email} />
            <br/>
            <input 
                type="text" 
                placeholder="Password"
                value={password}
                onChange={Password} />
            <br/> 
            <input 
                type="text" 
                placeholder="First Name"
                value={firstName}
                onChange={FirstName} />
            <br/>
            <input 
                type="text" 
                placeholder="Last Name"
                value={lastName}
                onChange={LastName} />  
            <br />
            <button onClick={() => thunkRegistration(email, firstName, lastName, password)}>Registration</button>
        </div>
    )
}

// const mapDispatchToProps = (dispatch: any) => {
//     const {registration} = bindActionCreators(actions, dispatch);
//     return{
//         registration
//     }
// }

export default connect(undefined, thunkRegistration)(Unprotected);