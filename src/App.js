import { createContext, useEffect, useState } from 'react';
import './style/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './component/Header/Header';
import Topbar from '../src/component/Topbar/Topbar'
import Menu from '../src/component/Menu/Menu'
import Client from './component/Client/Client';
import Service from './component/Service/Service';
import OurService from './component/OurService/OurService';
import Footer from './component/Footer/Footer';
import Signin from './component/Login/Signin';
import Signup from './component/Login/Signup';
import ProductPage from './component/ProductPage/ProductPage';
import Dashboard from './component/Dashboard/Dashboard';
import ProductList from './component/Dashboard/Layout/Sidebar/ProductList/ProductList';
import AddProduct from './component/Dashboard/Layout/Sidebar/AddProduct/AddProduct';
import OderList from './component/Dashboard/Layout/Sidebar/OderList/OderList';
import OrderPage from './component/OrderPage/OrderPage';
import firebase from 'firebase/app'
import AllOrder from './component/Dashboard/Layout/Sidebar/AllOrder/AllOrder';
import PrivateRoute from './component/Login/PrivateRoute';

export const UserContext = createContext(null)
function App() {
  const generateToken = () => {
    const User = firebase.auth().currentUser
    console.log(User.email)
    User.getIdToken(false).then(token => {
        sessionStorage.setItem("token", token);
        localStorage.setItem("token", token);
    })
}

const [logInUser,setLogInUser] = useState({});
const handleAfterSignInOutResponse = async (user) => {
  if (user) {
      // IF Found User Data means Authenticated 
      console.log(user.displayName)
      setLogInUser(user);
      generateToken()
  } else {
      // User is signed out
      setLogInUser({});
  }
}

useEffect(() => {
  // onAuthStateChanged will executed in login and logout
  const unsubscribe = firebase.auth().onAuthStateChanged (handleAfterSignInOutResponse);
  // unsubscribe when unmounting the component
  return unsubscribe;
  // eslint-disable-next-line
}, []);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <UserContext.Provider value={[logInUser,setLogInUser]}>
      
      <Router>
      <Switch>
        <Route exact path="/">
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} ></Topbar>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} ></Menu>
          <Header></Header>
          <Service></Service>
          <OurService></OurService>
          <Client></Client>
          <Footer></Footer>        
       </Route>
       <Route exact path="/login">
         <Signin></Signin>
       </Route>
       <Route exact path="/signup">
         <Signup></Signup>
       </Route>
       <PrivateRoute exact path="/product/:_id">
          <ProductPage></ProductPage>
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute  exact path="/dashboard/ProductList">
        <ProductList menuOpen={menuOpen} setMenuOpen={setMenuOpen}></ProductList>
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard/AddProduct">
        <AddProduct></AddProduct>
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard/OderList">
          <OderList></OderList>
        </PrivateRoute>
        <PrivateRoute exact path="/order/:_id">
          <OrderPage></OrderPage>
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard/allorder">
          <AllOrder></AllOrder>
        </PrivateRoute>
       </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
