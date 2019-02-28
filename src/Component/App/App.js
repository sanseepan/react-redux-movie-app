import React, { Component } from 'react';
import './App.css';
import film from '../../assets/film.jpg';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import Main from '../../Component/Main/Main';
import SinglePage from '../../Component/SinglePage/SinglePage';
import Footer from '../../Component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <div className="App">
        <header className="App-header">
        <img src={film}  alt = "film" className = "film"/>
        <p className ="head-text">Hollywood Movies Entertainment</p>
        </header>
        
        <Switch> 
        <Route exact path = "/" component  = {Main}/> 
        <Route path = "/:id" component = {SinglePage}/> 
        </Switch> 
        <Footer/>

      </div>
      </BrowserRouter>

    );
  }
}

export default App;
