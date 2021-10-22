import React from 'react';
import { Redirect, Route ,Switch} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AuthRouter = () => {
    console.log("AuthRoute ejecutado")
    return (
            <Switch>
              <Route exact path="/user/login" component={Login} />
              <Route exact  path="/user/register" component={Register} />
              <Redirect to="/user/login" /> 
            </Switch>

    );
};

export default AuthRouter;