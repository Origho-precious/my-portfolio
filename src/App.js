import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Homepage from './pages/home';
import Resume from './pages/resume';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/resume' exact component={Resume} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;