import React from 'react'

export const Auth = (props) =>{
const pass = 'pass13';
if(pass != 'pass123'){
  return <h3> You are not authorized</h3>
} else {
  return props.children
}
}
export default Auth;