import React from 'react';
import Login from '../pages/Login';
import {Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Signup from '../pages/Signup';

const Routes: React.FC = () =>{
  return (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Switch>
  )
}
export default Routes;

