import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRouter = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {
    return (
        <Route {...rest} 
            component={(props)=>(
                (isAuthenticated)
                ?(<Component {...props}/>)
                :(<Redirect to="/user/login"/>)
            )}
        />
    );
};

export default PrivateRouter;