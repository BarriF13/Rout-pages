import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
// we have memory router -- which will save everything to memory nothing in browser
// import { HashRouter, Route, Link } from 'react-router-dom';

//components
import Home from './components/Home';
import Profile from './components/Profile';
import Posts from './components/Posts';
import PostItem from './components/Post_item';




//Myapp.com/posts
//Myapp.com/profile/posts

const App = () => {
  return (
    //BrowserRouter is the parent of all routing 
       <BrowserRouter>
      {/* <HashRouter> */}
      <header> 
        
        <NavLink to="/">HOME </NavLink><br/>

        <NavLink
         to="/Posts"
         activeStyle={{color:'red'}}
         activeClassName="selected"
         >POSTS </NavLink><br/>

        <NavLink to={{
          pathname: "/Profile",
          }}>PROFILE </NavLink><br/>
        <hr/>
         </header>
            <Route path="/" exact components={Home}/>
            <Route path="/posts"  exact component ={ Posts}/>
            <Route path="/posts/:id/:username" component ={ PostItem}/>
            <Route path="/profile" component ={ Profile}/>
      </BrowserRouter>
      /* </HashRouter> */
    
    )
}
ReactDOM.render (
  <App />,
  document.querySelector('#root') 
)