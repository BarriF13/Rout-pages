import React from 'react'

const Conditional =( )=> {

  const value = false;

  const returnValue =()=>{
    return false;
  }
  const showIt =()=> {
    return(
      returnValue() ?<div>Hello it's a  true</div>: <div>Oops it's false</div>
      )
    }
    return (
      <div>
        {showIt()}
          {/* { value ?<div>Hello it is true</div>: null } */}

          
        
      </div>
    )
  
}
export default Conditional;
