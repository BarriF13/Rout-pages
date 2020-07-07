import React from 'react';
import { Link, Redirect  } from 'react-router-dom';
import Card from '../hoc/card'



const Profile = (props)=> {
  console.log(props);

  const redir = () => {
    // props.history.push('/')
  }
  return (
    <Card>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}>Take me to profile/posts</Link>
      
    </Card>
  )
}
export default Profile;