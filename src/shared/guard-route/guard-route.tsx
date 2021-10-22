import React from 'react';
import { Redirect, Route } from 'react-router';


const GuardRoute = ({ component: Component, auth, path }: {component: any, auth: boolean, path: string}) => {
    return <Route {...path} render= {(props) => (
        auth === true 
            ? <Component {...props} />
            : <Redirect to='/' />
    )}/>
}

export default GuardRoute;