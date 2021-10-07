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

function App() {
  return (
    <Router>
      <Navigation/>
      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/tecnologia" component={Tecnology}/>
        </Switch>
        
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
