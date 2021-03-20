import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer'
import AddNewRGoal from './AddNewRGoal/AddNewRGoal';
import { Route } from "react-router-dom";
import AddNewOTGoal from './AddNewOTGoal/AddNewOTGoal';
import Dashboard from './Dashboard/Dashboard';
import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
    <main className='App'>
      <Route 
        path='/'
        component={Nav}
      />
      <Route 
        exact path='/'
        component={LandingPage}
      />
      <Route 
        path='/dashboard'
        component={Dashboard}
      />
      <Route 
        path='/add-new-recurring'
        component={AddNewRGoal}
      />
      <Route 
        path='/add-new-onetime'
        component={AddNewOTGoal}
      />
      <Route 
        path='/'
        component={Footer}
      />
    </main>
  );
}

export default App;