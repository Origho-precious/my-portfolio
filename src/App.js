import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Homepage from './pages/home';
import Resume from './pages/resume';
import Projects from './pages/projects';
import Contact from './pages/contact';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/resume' exact component={Resume} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;