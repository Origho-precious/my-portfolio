import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Homepage from './pages/home';
import Footer from './components/footer';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Homepage} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;