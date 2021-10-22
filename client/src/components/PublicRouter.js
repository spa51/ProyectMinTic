import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const PublicRouter = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {
    console.log("Public Route ejecutada", isAuthenticated,Component)
    return (
        <Route {...rest}
            component={(props)=>(
                (isAuthenticated)
                ?(<Redirect to="/store"/>)
                :(<Component {...props}/>)
            )}
        />
    );
};

export default PublicRouter;