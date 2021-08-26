import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import {AuthContext} from "./Context/AuthContext";



function App() {
  return (
    <div className="app">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <AuthContext>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Profile" component={Profile}/>
            <Route exact path="/Dashboard" component={Dashboard}/>
            <Route exact path="/About" component={About}/>
          </AuthContext>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;