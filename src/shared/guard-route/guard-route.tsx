import {Redirect, Route} from 'react-router';
import {AppPaths} from '../models/appPaths';


const GuardRoute = ({ path, component: Component, auth}: {component: any, auth: boolean, path: string}) => {
    return <Route {...path} render= {(props) => (
        auth === true 
            ? <Component {...props} />
            : <Redirect to={AppPaths.HOME} />
    )}/>
}

export default GuardRoute;