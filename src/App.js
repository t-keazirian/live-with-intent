import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer'
import { Route, Switch } from "react-router-dom";
import AddNewOTGoal from './AddNewGoal/AddNewGoal';
import Dashboard from './Dashboard/Dashboard';
import LandingPage from './LandingPage/LandingPage';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className='main-app'>
    <main className='App'>
    <nav>
      <Nav />
    </nav>
    <Switch>
      <Route 
        exact path='/'
        component={LandingPage}
      />
      <Route 
        path='/dashboard'
        component={Dashboard}
      />
      <Route 
        path='/add-new-goal'
        component={AddNewOTGoal}
      />
      <Route 
        component={NotFound}
      />
      </Switch>
    </main>
    <footer>
      <Footer />
    </footer>
    </div>
  );
}

export default App;