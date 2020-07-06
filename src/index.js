import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import Home from './components/Home'
import Profile from './components/Profile'
import Posts from './components/Posts'

const App = () => {
  return (
      <BrowserRouter>
      <header> I am a header</header>
            <Route path="/" components={Home}/>
            <Route path="/Posts" component ={ Posts}/>
            <Route path="/Profile" component ={ Profile}/>
      </BrowserRouter>
    
    )
}
ReactDOM.render (
  <App />,
  document.querySelector('#root')
)