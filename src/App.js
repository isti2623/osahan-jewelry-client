import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/explore'>
              <Explore></Explore>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
