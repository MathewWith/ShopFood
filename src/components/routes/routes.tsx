import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'src/components/pages/Home';
import GuardRoute from 'src/shared/guard-route/guard-route';
import Protected from 'src/components/pages/Protected';
import Unprotected from 'src/components/pages/Unprotected';
import Library from 'src/components/pages/Library'
import { connect } from 'react-redux';


const IsRoute = ({isLoggedIn}: {isLoggedIn: boolean}) => {
    return(
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <GuardRoute path='/protected' component={Protected} auth={isLoggedIn}/>
            <Route path='/unprotected' component={Unprotected} />
            <Route path='/Routes' component={Library} />
          </Switch>
        </div>
    )
}

const mapStateToPropse = ({isLoggedIn}: {isLoggedIn: boolean}) => {
    return {isLoggedIn}
};


export default connect(mapStateToPropse)(IsRoute);