import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch , Redirect} from 'react-router-dom';
// we have memory router -- which will save everything to memory nothing in browser
// import { HashRouter, Route, Link } from 'react-router-dom';

//components
import Home from './components/Home';
import Profile from './components/Profile';
import Posts from './components/Posts';
import PostItem from './components/Post_item';
import LifeCycle from './components/Lifecycle';
import Conditional from './components/Conditional';




//Myapp.com/posts
//Myapp.com/profile/posts

const App = () => {
  return (
    //BrowserRouter is the parent of all routing 
    <BrowserRouter>
     <div>
      <header>

        <NavLink to="/">HOME </NavLink><br />

        <NavLink
          to="/Posts"
          activeStyle={{ color: 'red' }}
          activeClassName="selected"
        >POSTS </NavLink><br />

        <NavLink to={{
          pathname: "/Profile",
        }}>PROFILE </NavLink><br />
        <NavLink to="/life">Life cycle </NavLink><br />
        <NavLink to="/conditional">Conditional </NavLink><br />
        <hr />
      </header>

      <Switch>
        <Redirect from="/profile" to="/"></Redirect>
        <Route path="/posts/:id/:username" component={PostItem}/>
        <Route path="/profile" component={Profile} />
        <Route path="/posts"  component={Posts} />
        <Route path="/life"  component={LifeCycle} />
        <Route path="/conditional"  component={Conditional} />
        <Route path="/" exact component={Home} />
      <Route render={()=> <h3>Oops 404</h3> }/>
        
      </Switch>
      </div>
    </BrowserRouter>
    

  )
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)