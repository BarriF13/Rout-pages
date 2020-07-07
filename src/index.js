import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//components
import Home from './components/Home';
import Profile from './components/Profile';
import Posts from './components/Posts';


//Myapp.com/posts
//Myapp.com/profile/posts

const App = () => {
  return (
    //BrowserRouter is the parent of all routing 
      <BrowserRouter>
      <header> 
        
        <Link to="/">HOME </Link><br/>
        <Link to="/Posts">POSTS </Link><br/>
        <Link to={{
          pathname: "/Profile",
          hash: '#Barri',
          search: '?profile=true'
        }}>PROFILE </Link><br/>
        <hr/>
         </header>
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