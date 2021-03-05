import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Login from './Component/Login'
import Home from './Component/Home'
import Signup from './Component/Signup'
import Home1 from './Component/Home1'
import CreatePlan from './Component/CreatePlan'
import { useDispatch, useSelector } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import reducer from './reducer/Reducer'
import { Provider } from 'react-redux'
import Check from './Component/Check'
import CreatePlan1 from './Component/Createplan1'
import Plan from './Component/Plan'
import ViewMore from './Component/ViewMore';
import EditPlan from './Component/EditPlan'
import MyProfile from './Component/MyProfile'
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  HashRouter,Router
} from "react-router-dom";
import MyPlan from './Component/SMyPlan';
import Exerciseai from './Component/Exerciseai';
import NotFound from './Component/NotFound';
import Progress from './Component/Progress';
import Dashboard from './Component/Physiotherapist/Dashboard';
import Client from './Component/Physiotherapist/Client';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const Routing = () => {

var routes=(
  <Switch>
  <Route exact path="/home" component={Home}></Route>
  <Route exact path="/home/selectExercise" component={Home1}></Route>
  <Route exact path="/createplan" component={CreatePlan1}></Route>
  <Route exact path="/plan" component={Plan}></Route>
  <Route exact path="/viewmore" component={ViewMore}></Route>
  <Route exact path="/editplan" component={EditPlan}></Route>
  <Route exact path="/" component={MyPlan}></Route>
  <Route exact path="/Doexercise" component={Exerciseai}></Route>
  <Route exact path="/progress" component={Progress}></Route>
  <Route exact path="/dashboard" component={Dashboard}></Route>
  <Route exact path="/client" component={Client}></Route>
 
  <Route path="*" component={()=>{return (<>
<h1 className="text-center my-4">
 404 NOT FOUND</h1>
  </>)}}></Route>
  </Switch>

  
)


  if (localStorage.getItem("token")) {
    return (
      <>
      {routes}
      </>
    )
  }

  else {

    return (

      <>
      <Switch>
        <Route exact={true} path="/" component={Login}></Route>
        <Route exact={true} path="/signup" component={Signup}></Route>
        <Route path="*" component={()=>{return (<>
        <h1>
        NOT FOUND</h1>
        </>)}}></Route>
        </Switch>
      </>


    )
  }
}
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter history={HashRouter}>
        
            <Routing></Routing>
        
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
