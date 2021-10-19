import Navigation from './components/Navigation';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tecnology from './pages/Tecnology';
import House from './pages/House';
import HealthAndBeauty from './pages/HealthAndBeauty';
import Sports from './pages/Sports';
import NotFoundPage from './pages/NotFoundPage'
import { ContextProvider } from './components/ProductsProvider';
import Login from './pages/Login';


function App() {
  return (
      <Router>
        <Navigation/>
        <div>
          <ContextProvider>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/tecnologia" component={Tecnology}/>
              <Route path="/hogar" component={House}/>
              <Route path="/saludybelleza" component={HealthAndBeauty}/>
              <Route path="/deportes" component={Sports}/>
              <Route path="/login" component={Login} />
              <Route exact path="*" component={NotFoundPage}/>     
            </Switch>
          </ContextProvider>
        </div>
      </Router>
  );
}

export default App;
