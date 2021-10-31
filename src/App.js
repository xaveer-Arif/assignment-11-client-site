import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import MenuBar from './Pages/Home/MenuBar/MenuBar';
import LogIn from './Pages/LogIn/LogIn';
import ManageOrder from './Pages/ManageOrders/ManageOrder';
import MyOrders from './Pages/MyOrders/MyOrders';
import PrivateRoute from './Pages/PrivateRouter/PrivateRoute';
import Register from './Pages/Register/Register';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <MenuBar></MenuBar>
          <Switch>
            <Route exact path = '/'>
                <Home></Home>
              </Route>
            <Route path = '/home'>
                <Home></Home>
              </Route>
            
            <PrivateRoute path = '/addService'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path = '/details/:id'>
                <ServiceDetails></ServiceDetails>
            </PrivateRoute>
          {/*   <Route path = '/register'>
              <Register></Register>
            </Route> */}
          {  <Route path = '/login'>
              <LogIn></LogIn>
            </Route>}
            <PrivateRoute path = '/myorders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path = '/manageOrders'>
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            
          </Switch>
              <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
