import React from 'react';


const PostItem = (props)=> {
  console.log(props);
  return (
    <div>
     {props.match.params.id} - {props.match.params.username}
      <h2>manamanam</h2>     
    </div>
  )
}
export default PostItem;