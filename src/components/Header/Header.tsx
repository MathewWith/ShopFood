import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import getItems from 'src/reducers/thunk'

const Header = ({getItems}: {getItems: any}) => {
    return(
        <div className="header">
            <ul>
                <li>
                    <Link className="link" to='/' >
                        Go to Home Page
                    </Link>   
                </li>
                <li>
                    <Link className="link" to='/protected'>
                        Go to Protected Page
                    </Link>   
                </li>
                <li>
                    <Link className="link" to='/unprotected'>
                        Go to Unprotected Page
                    </Link>   
                </li>
                <li>
                    <Link 
                    className="link" to='/Routes'>
                        Go to Routes
                    </Link>   
                </li>
            </ul>
        </div>
    )
}

export default connect(null, getItems)(Header)