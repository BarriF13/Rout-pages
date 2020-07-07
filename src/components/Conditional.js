import React from 'react'

const Conditional =( )=> {

  const value = false;

  const returnValue =()=>{
    return false;
  }
    return (
      <div>
        
          {/* { value ?<div>Hello it is true</div>: null } */}

          { returnValue() ?<div>Hello it's a  true</div>: <div>Oops it's false</div> }
        
      </div>
    )
  
}
export default Conditional;
