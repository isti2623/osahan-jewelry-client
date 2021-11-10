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
import Purchase from './Pages/Purchase/Purchase/Purchase';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Admin from './Pages/Admin/Admin/Admin';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';

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
            <PrivateRoute path='/purchase'>
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <AdminRoute path='/admin'>
              <Admin></Admin>
            </AdminRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
