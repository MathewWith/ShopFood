import {useState} from 'react';
import registration from 'src/store/actions/auth';
import {connect} from 'react-redux';

enum ChangeTypes {
    EMAIL = "EMAIL",
    PASSWORD = "PASSWORD",
    FIRSTNAME = "FIRSTNAME",
    LASTNAME = "LASTNAME"
}

const Registration = ({registration}: {registration: any}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const parseChangeEvent = (
        { target: { value }}: {target: {value: string }}, 
        changeType: ChangeTypes) => {
        const changeState = {
            [ChangeTypes.EMAIL]: () => setEmail(value),
            [ChangeTypes.PASSWORD]: () => setPassword(value),
            [ChangeTypes.FIRSTNAME]: () => setFirstName(value),
            [ChangeTypes.LASTNAME]: () => setLastName(value)
        }
        changeState[changeType]()
        return undefined;
    }

    return (
        <div className="unprotected">
            <input 
                type="text" 
                placeholder="Email"
                value={email} 
                onChange={e => parseChangeEvent(e, ChangeTypes.EMAIL)} />
            <br/>
            <input 
                type="text" 
                placeholder="Password"
                value={password}
                onChange={e => parseChangeEvent(e, ChangeTypes.PASSWORD)} />
            <br/> 
            <input 
                type="text" 
                placeholder="First Name"
                value={firstName}
                onChange={e => parseChangeEvent(e, ChangeTypes.FIRSTNAME)} />
            <br/>
            <input 
                type="text" 
                placeholder="Last Name"
                value={lastName}
                onChange={e => parseChangeEvent(e, ChangeTypes.LASTNAME)} />  
            <br />
            <button onClick={() => {registration(email, firstName, lastName, password)}}>Registration</button>
        </div>
    )
}


export default connect(null, registration)(Registration);