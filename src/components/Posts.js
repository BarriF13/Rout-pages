import React from 'react';
import { Link } from 'react-router-dom'



const Posts = ()=> {

  // const ids= [
  //   {id:'1', name: 'Post 1'},
  //   {id:'2', name: 'Post 2'},
  //   {id:'3', name: 'Post 3'},
  // ]

  // const list = ids.map(item => {
  //   return(
  //     <span key={item.id}>
  //       <link to={item.id}/>{item.name} <link/><br/>
  //     </span>
  //   )

  // })
//   return ids.map(item => {
//     return(
//       <span key={item.id}>
//         <link to={item.id}/>{item.name} <link/><br/>
//       </span>
//     )
  
// })

return [
  // "Hello ", 
  // "I am ",
  // "a react app- array"
  <div key="1">Hello</div> ,
  <div key="2">I am </div>,
  <div key="3">a react app - array</div>
]
}
export default Posts;