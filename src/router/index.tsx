import {Route, Switch} from 'react-router-dom';
import Home from 'src/components/pages/Home';
// import GuardRoute from 'src/shared/guard-route/guard-route';
import Library from 'src/components/pages/Library'
import {connect} from 'react-redux';
import { AppPaths } from 'src/shared/models/appPaths';
import Login from 'src/components/pages/auth/Login/Login';
import Registration from 'src/components/pages/auth/Registration';


const IsRoute = (props: any) => {
    const {isLoggedIn} = props

    return(
        <div>
          {console.log("isLogged:", isLoggedIn)}
          <Switch>
            <Route exact path={AppPaths.HOME} component={Home}/>
            <Route path={`/${AppPaths.LOGIN}`} component={Login}/>            
            <Route path={`/${AppPaths.NOTES}`} component={Library}/>            
            {/* <GuardRoute path={`/${AppPaths.NOTES}`} component={Library} auth={isLoggedIn}  /> */}
            <Route path={`/${AppPaths.REGISTRATION}`} component={Registration} />
          </Switch>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
      isLoggedIn: state.notes
    }
};


export default connect(mapStateToProps, null)(IsRoute);