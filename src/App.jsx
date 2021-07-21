import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/footer'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/rooms/" component={Rooms} exact ></Route>
        <Route path="/rooms/:slug" component={SingleRoom} exact></Route>
        <Route component={Error}></Route>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
