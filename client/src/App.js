import {
  BrowserRouter as Router,
  Switch,Redirect
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ContextProvider, GlobalContext } from './components/ProductsProvider';
import AppRouter from './components/AppRouter';
import AuthRouter from './components/AuthRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { initializeApp } from "@firebase/app";
import PrivateRouter from './components/PrivateRouter';
import PublicRouter from './components/PublicRouter';
import { useEffect } from "react";
import { firebaseConfig } from "./helpers/firebase.config";

initializeApp(firebaseConfig);
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  
  useEffect(()=>{
    
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        setIsLoggedIn(true)

      } else {
        setIsLoggedIn(false)
      }
    });
  },[])
  
  return (
      <Router>
        <div>
          <ContextProvider>
            <Switch>
              <PublicRouter
                path="/user"
                isAuthenticated={isLoggedIn}
                component={AuthRouter}
              />   
              <PrivateRouter  
                path="/store" 
                isAuthenticated={isLoggedIn}
                component={AppRouter}
              />
              <Redirect to="/user/login"/>
            </Switch>
          </ContextProvider>
        </div>
      </Router>
  );
}

export default App;
