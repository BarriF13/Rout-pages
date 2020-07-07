import React from 'react';
import { Link } from 'react-router-dom'



const Posts = ()=> {

  const ids= [
    {id:'1', name: 'Post 1'},
    {id:'2', name: 'Post 2'},
    {id:'3', name: 'Post 3'},
  ]

  const list = ids.map(item => {
    return(
      <span key={item.id}>
        <link to={item.id}/>{item.name} <link/><br/>
      </span>
    )

  })
  return (
    <div>
      {list }

      {/* <Link to="/posts/1">Post 1</Link> <br/>
      <Link to="/posts/2">Post 2</Link><br/>
      <Link to="/posts/3">Post 3</Link><br/> */}
            
      </div>
  )
}
export default Posts;