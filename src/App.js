import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './Pages/AddService/AddService';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import MenuBar from './Pages/Home/MenuBar/MenuBar';
import ManageOrder from './Pages/ManageOrders/ManageOrder';
import MyOrders from './Pages/MyOrders/MyOrders';
import Register from './Pages/Register/Register';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
        <Router>
        <MenuBar></MenuBar>
          <Switch>
            <Route exact path = '/'>
                <Home></Home>
              </Route>
            <Route path = '/home'>
                <Home></Home>
              </Route>
            <Route path = '/home'>
                <Home></Home>
              </Route>
            <Route path = '/addService'>
              <AddService></AddService>
            </Route>
            <Route path = '/details/:id'>
                <ServiceDetails></ServiceDetails>
            </Route>
            <Route path = '/register'>
              <Register></Register>
            </Route>
            <Route path = '/myorders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path = '/manageOrders'>
              <ManageOrder></ManageOrder>
            </Route>
            
          </Switch>
              <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
