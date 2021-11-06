import {Link} from 'react-router-dom';
import {AppPaths} from 'src/shared/models/appPaths';

const Header = () => {
    return(
        <div className="header">
            <ul>
                <li>
                    <Link className="link" to={AppPaths.HOME} >
                        Home
                    </Link>   
                </li>
                <li>
                    <Link className="link" to={`/${AppPaths.LOGIN}`}>
                        Login
                    </Link>   
                </li>
                <li>
                    <Link className="link" to={`/${AppPaths.REGISTRATION}`}>
                        Registration 
                    </Link>   
                </li>
                <li>
                    <Link 
                    className="link" to={`/${AppPaths.NOTES}`}>
                        Routes
                    </Link>   
                </li>
            </ul>
        </div>
    )
}

export default Header