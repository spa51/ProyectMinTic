import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import HealthAndBeauty from '../pages/HealthAndBeauty';
import Home from '../pages/Home';
import House from '../pages/House';
// import NotFoundPage from '../pages/NotFoundPage';
import Sports from '../pages/Sports';
import Tecnology from '../pages/Tecnology';
import Navigation from './Navigation';
const AppRouter = () => {
    console.log("Me ejecute fui yo")
    return (
        <div>
            <Navigation/>
            <Switch>
                <Route path="/store" exact component={Home}/>
                <Route path="/store/tecnologia" exact component={Tecnology}/>
                <Route path="/store/hogar" exact component={House}/>
                <Route path="/store/saludybelleza" exact component={HealthAndBeauty}/>
                <Route path="/store/deportes" exact component={Sports}/>
                <Redirect to="/store"/>
                {/* <Redirect to={NotFoundPage}/>  */}
            </Switch>
        </div>
    );
};

export default AppRouter;