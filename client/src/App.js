import Navigation from './components/Navigation';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
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

              <Route exact path="*" component={NotFoundPage}/>     
            </Switch>
          </ContextProvider>
        </div>
        <Footer/>
      </Router>
  );
}

export default App;
