import React from 'react';
import actions from 'src/actions/index';
import { connect } from 'react-redux';

const Buttons = ({isLogin, isLogout}: {isLogin: any, isLogout: any}) => {
    return(
        <div className='button'>
            <button onClick={isLogin}
                    className='button-btn'>Login</button>
            <button onClick={isLogout}
                    className='button-btn'>Logout</button>
        </div>
    )
}



export default connect(undefined, actions)(Buttons);